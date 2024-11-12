import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { router } from "expo-router";
import React from "react";

import { Category } from "../types/categorias";

type Props = {
    data: Category;
}

export const CategoryItem = ({data}: Props) => {
    //configurando rota dinãmica
    const click = () =>{
        router.navigate(`/categories/${data.id}`)
    }

    return (
        <Pressable style={styles.container} onPress={click}>
            <Image
                style={styles.image}
                source={{uri: data.cover}}
                resizeMode="cover"
            />
            <View style={styles.bg}></View>
            <View style={styles.box}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    container: {
        margin: 5,
        backgroundColor: "#333333",
        borderRadius: 10,
    },

    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },

    bg: {
        height: 120,
        borderRadius: 10,
        backgroundColor: "black",
        opacity: 0.6,
        marginTop: -120
    },

    box: {
        height: 150,
        marginTop: -150,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    }
})