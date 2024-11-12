import { Image, Pressable, StyleSheet, Text, View } from "react-native"

// rota dinâmica
import { Link } from "expo-router"
import React from "react"

import { Products } from "../types/produtos"

type Props = {
    data: Products
}

export const ProductItem = ({ data }: Props) => {
    return (
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>

                <Image
                    style={styles.img}
                    source={{uri: data.image}}
                    resizeMode="cover"
                />

                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>R$ {data.price.toFixed(2)}</Text>
                    <Text style={styles.price}>{data.description}</Text>
                </View>
                
            </Pressable>
        </Link>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        height: 110,
        paddingLeft: 10,
        borderRadius: 10,
    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#cccccc"
    },

    info: {
        flex: 1,
        padding: 8
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },

    description: {
        fontSize: 13,
        color: "#555555",
        marginBottom: 5
    },

    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right'
    },
})