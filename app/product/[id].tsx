import { SafeAreaView } from "react-native-safe-area-context";

import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";

import { getProductByID } from "../../services/product";
import { Products } from "../../types/produtos";

import React, { useState, useEffect } from "react";

export default async function Screen() {
    // receber o id
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);
    const product = await getProductByID(idProduct)

   
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue("");
    }, [product]);

    if (!product) {
        return <Text>Produto não encontrado.</Text>;
    }

    const comprar = () => {
        // Função para processar a compra
        console.log("Produto comprado:", product.title, "Quantidade:", "Total:", +inputValue*product.price);
    };


        return(
            <SafeAreaView style={style.container }>
                <Stack.Screen options={{title:''}}/>
                    
                <ScrollView style={style.area}>
                    <Image
                        style={style.img}
                        source={{uri: product.image}}
                        resizeMode="cover"
                    />
                    <Text style={style.title}>{product.title}</Text>
                    <Text style={style.description}>{product.description}</Text>
                    <View style={style.priceArea}>
                        <Text style={style.price}>R$ {product.price}</Text>
                    </View>
                    
                </ScrollView>

                <View style={style.buttonArea}>
                    <View style={style.inputArea}>
                        <Text style={style.txt}>Quantidade de produtos</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Quantidade"
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={setInputValue}
                        />
                    </View>
                    
                    <Button
                        title="Comprar"
                        onPress={comprar}
                    />
                </View>
            </SafeAreaView>
        );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    area: {
        flex: 1,
        padding: 10,
        backgroundColor: 'lightblue',
    },

    buttonArea: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10
    },

    description: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#555555"
    },

    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#dcdcdc"
    },

    price: {
        fontSize: 22,
        textAlign: 'center'
    },

    inputArea: {
        flexDirection: "column",
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 20
    },

    txt:{
        fontSize: 15,
        textAlign: 'center',
        color: "#000000",
        fontWeight: '800'
    },

    input: {
        height: 40,
        width: 90,
        borderColor: 'gray',
        borderWidth: 3,
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        borderRadius: 10
      },
    

})