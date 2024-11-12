import { View, StyleSheet, FlatList } from "react-native";


import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";
import { getProductsByCategory } from "../../../services/product";
import React from "react";

export default function Screen (){
    // receber o id de categotyItem como string
    const {id} = useLocalSearchParams();
    // convertendo em int para poder consultar por id na lista
    const idCategory = parseInt(id as string)
    // puxando as categorias por id
    const category = getCategoryById(idCategory)

    if (!category) {
        return router.back;
    }

    // pegando a lista de produtos daquela categoria
    const products = getProductsByCategory(idCategory)

    return(
        <View style={styles.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    }
})