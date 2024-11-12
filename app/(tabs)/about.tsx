import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function Screem(){
    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'};

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container2}
            >
            </ImageBackground>
                
                    <Text style={styles.txt}> 
                    ola, seja bem vindo a Distribuidora Suplementos
                    </Text>

                    <Text style={styles.txt}> 
                        nossa lojas se dedicam a oferecer Suplementos de qualidade para os consumidores
                    </Text>

                    <Text style={styles.txt}> 
                    este aplicativo é dedicado a facilitar a 
                    consulta e pedido de produtos para cada usuário
                    </Text>    
                    
                    <Text style={styles.txt}> 
                    se tiver em dúvida entre em contato através do nosso site oficial
                    https://www.DistribuidoraSuple.com.br
                    </Text>   

                    <Text style={styles.txt}> 
                    ou em outras redes sociais:               
                    </Text>   

                    <Text style={{fontSize:17, color: 'black', fontWeight: '900'}}>whatsapp: (99) 6666-6666</Text>

                    <Text style={{fontSize:17, color: 'black', fontWeight: '900'}}>facebook: Distribuidora Suplementos</Text> 
             

                <Image
                    style={styles.img}
                    source={require('../../assets/logosuplementos-removebg-preview.png')}
                    resizeMode="cover"
                />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 1,
        paddingTop: 30,
        backgroundColor: 'lightgrey'
    },

    container2: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 1,
        width: '110%',
        height: '140%',
        marginBottom: -600,
        opacity: 0.3
    },

    txt: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
        color: '#000000',
        fontWeight: '900'
    },

    img: {
        width: 210,
        height: 210,
        borderRadius: 115,
        marginTop: -10,
    },
})