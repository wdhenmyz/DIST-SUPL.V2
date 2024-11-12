import firebase from "../firebase"

// Função para buscar todos os produtos
export const getProducts = async () => {
    const data = await firebase.firestore().collection('produtos').get();
    return data;
};

// Função para buscar um produto pelo ID
export const getProductByID = async (value: number | string) => {
    console.log(value);
    const data = await firebase.firestore().collection('produtos').where('id', '==', value).get();
    return data.empty ? null : data.docs[0].data(); // Retorna o primeiro item ou null
};


