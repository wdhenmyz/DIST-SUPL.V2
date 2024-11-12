require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const produtos = async (req, res) => {
  try {
    // Consulta para obter os produtos
    const result = await sql`SELECT * FROM products`;

    // Verifica se existem produtos
    if (result.length === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "No products found." }));
      return;
    }

    // Responde com os dados dos produtos
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal server error." }));
  }
};

const produtosID = async (req, res) => {
  try {
    // Captura o ID da URL
    const id = req.url.split("/")[2]; // Supondo que a URL seja "/products/id"
    
    // Consulta para obter o produto pelo ID
    const result = await sql`SELECT * FROM products WHERE id = ${id}`;

    // Verifica se o produto existe
    if (result.length === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found." }));
      return;
    }

    // Responde com os dados do produto
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result[0])); // Retorna apenas o produto encontrado
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal server error." }));
  }
};

// Função para criar um novo produto (POST)
const createProduct = async (req, res) => {
  let body = '';

  // Coletar dados do corpo da requisição
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const productsArray = JSON.parse(body); // use the imported products array

      // Verifica se é um array e se cada item tem as propriedades corretas
      if (!Array.isArray(productsArray) || productsArray.some(product => 
        typeof product.idCategory !== 'number' || 
        typeof product.id !== 'number' || 
        typeof product.image !== 'string' || 
        typeof product.title !== 'string' || 
        typeof product.description !== 'string' || 
        typeof product.price !== 'number'
      )) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid input. Each product must have 'idCategory' and 'id' as numbers, 'image', 'title', and 'description' as strings, and 'price' as a number." }));
        return;
      }

      // Inserir todos os produtos no banco de dados
      for (const product of productsArray) {
        const { idCategory, id, image, title, description, price } = product;
        await sql`INSERT INTO products (idCategory, id, image, title, description, price) VALUES (${idCategory}, ${id}, ${image}, ${title}, ${description}, ${price})`;
      }

      // Responder com sucesso
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Products created successfully." }));
    } catch (error) {
      console.error("Erro ao criar produtos:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal server error." }));
    }
  });
};

  

module.exports = {produtos, produtosID, createProduct};