import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({title,onPress}: Props ) => {
    return (
        <Pressable onPress={onPress} style={styles.Button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: '50%',
        marginBottom: 3
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})