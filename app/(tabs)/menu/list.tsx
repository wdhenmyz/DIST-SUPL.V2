import { router } from "expo-router";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";


export default function Screen (){
    const Start = () => {
        router.replace('/')
    }

    return(
        <View style={styles.container}>

            <View style={styles.topo}>  
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/74/74472.png'}}
                    resizeMode="cover"
                    style={styles.topoicone}
                />
                <View style={styles.topocaixa}>
                    <Text style={styles.caixatxt}> USUÁRIO: XXXXX YYYY ZZZZ</Text>
                    <Text style={styles.caixatxt}> ID: 00-0000000.11</Text>
                    <Text style={styles.caixatxt}> DATA: DD/MM/AAAA</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.config}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/2645/2645890.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
                <Text style={styles.txtconfig}> Ativar notificações </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.config}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/17317/17317821.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
                <Text style={styles.txtconfig}> Gerenciar conta </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.config}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/15792/15792390.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
                <Text style={styles.txtconfig}> Gerenciar compras </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.config}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/7595/7595902.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
                <Text style={styles.txtconfig}> suporte ao cliente </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.config} onPress={Start}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/2734/2734817.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
                <Text style={styles.txtconfig}> desconectar a conta </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: 6
    },

    topo:{
        width:'98%',
        height:'24%',
        backgroundColor: '#B0C4DE',
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10
    },

    topoicone:{
        width: 100,
        height: 100,
    },

    topocaixa:{
        width:'69%',
        height:'100%',
        backgroundColor: '#B0C4DE',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },

    caixatxt:{
        fontSize: 15,
        marginBottom: 10,
        marginTop: 8,
        fontWeight: '600'
    },

    config: {
        zIndex: 1, // Ensure the main content stays on top
        width: '95%',
        height: 50,
        backgroundColor: '#B0C4DE',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },

    IconeConfig: {
        height: 40, 
        width: 40,
        marginLeft: 10,
        marginRight: 20
    },

    txtconfig: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})