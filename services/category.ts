import firebase from "../firebase"

// Função para buscar categorias e definir o estado
export const getCategories = async () => {
    const data = await firebase.firestore().collection('categorias').get();
    return data;
};

// Função para buscar uma categoria pelo ID
export const getCategoryById = async (value: number | string) => {
    const data = await firebase.firestore().collection('categorias').where('id', '==', value).get()
    return data.empty ? null : data.docs[0].data(); // Retorna o primeiro item ou null
};