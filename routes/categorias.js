require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const categorias = async (req, res) => {
  try {
    // Consulta para obter as categorias
    const result = await sql`SELECT * FROM categories`;

    // Verifica se existem categorias
    if (result.length === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "No categories found." }));
      return;
    }

    // Responde com os dados das categorias
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal server error." }));
  }
};

const categoriasID = async (req, res) => {
  try {
    // Captura o ID da URL
    const id = req.url.split("/")[2]; // Supondo que a URL seja "/categories/id"
    
    // Consulta para obter a categoria pelo ID
    const result = await sql`SELECT * FROM categories WHERE id = ${id}`;

    // Verifica se a categoria existe
    if (result.length === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Category not found." }));
      return;
    }

    // Responde com os dados da categoria
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result[0])); // Retorna apenas a categoria encontrada
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal server error." }));
  }
};

// Função para criar uma nova categoria (POST)
const createCategory = async (req, res) => {
  let body = '';

  // Coletar dados do corpo da requisição
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const categories = JSON.parse(body);

      // Verifica se é um array e se cada item tem as propriedades corretas
      if (!Array.isArray(categories) || categories.some(cat => 
        typeof cat.id !== 'number' || 
        typeof cat.title !== 'string' || 
        typeof cat.cover !== 'string'
      )) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid input. Each category must have 'id' as number, 'title' and 'cover' as strings." }));
        return;
      }

      // Inserir todas as categorias no banco de dados
      for (const category of categories) {
        const { id, title, cover } = category;
        await sql`INSERT INTO categories (id, title, cover) VALUES (${id}, ${title}, ${cover})`;
      }

      // Responder com sucesso
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Categories created successfully." }));
    } catch (error) {
      console.error("Erro ao criar categorias:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal server error." }));
    }
  });
};


module.exports = {categorias, createCategory, categoriasID};
