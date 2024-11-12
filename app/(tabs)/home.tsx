import { View, StyleSheet, ScrollView, ImageBackground, Image, TextInput, FlatList } from "react-native";
import React, { useEffect } from 'react';
import { useState } from 'react';

// componente
import { Products } from "../../types/produtos";
import { ProductItem } from "../../components/product-item";

import { getProducts } from "../../services/product";

export default function Screen (){
    const puravida2 = {uri: 'https://puravida.fbitsstatic.net/img/b/8d53d2f6-471b-46dc-8fe4-389bfe885646.jpg'}
    const puravida = {uri: 'https://files.cached.puravida.com.br/api/files/static/4ea73f5b-3588-4a18-9e90-5ccc9e71c77e'}
    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'}

    const [Products, setProducts] = useState<Products[]>([]);

    // useEffect para chamar a função quando o componente for montado
    useEffect(() => {
      const fetchProducts = async () => {
          const data = await getProducts();
          setProducts(data.docs.map(doc => doc.data()) as Products[]);
      };

      fetchProducts();
  }, []);


    const [Text, onChangeText] = useState('procurar produto');

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
              <View style={styles.list}>
                <ScrollView horizontal>
                  <Image
                    source={puravida}
                    style={styles.tinyLogo}
                    resizeMode="cover" // you can also set the resizeMode for consistency
                    key="puravida1"
                  />
                  <Image
                    source={puravida2}
                    style={styles.tinyLogo}
                    resizeMode="cover" // Ensuring both images follow the same resize mode
                    key="puravida2"
                  />
                </ScrollView>
              </View>

              <View style={styles.list3}></View>

              <View style={styles.list2}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={Text}
                />

                <FlatList
                  data={Products}
                  renderItem={({item}) => <ProductItem data={item}/>}
                  keyExtractor={item => item.id.toString()}
                  style={styles.list4}
                /> 
                
              </View>

              
                
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },

    list: {
      width: '100%',
      height: 130,
      padding: 1,
      flexDirection: 'row',
      overflow: 'hidden'
    },

     tinyLogo: {
      width: 320,
      height: 128,
    },

    list2: {
      width: '100%',
      height: 400,
      alignItems:'center',
      marginTop: -562,
    },

    input: {
      height: 30,
      width: 210,
      margin: 12,
      borderWidth: 2,
      padding: 1,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'lightgrey',
      borderRadius: 20
    },

    list3: {
      width: '100%',
      height: 564,
      alignItems:'center',
      backgroundColor: 'white',
      
      opacity: 0.4,
    },

    list4: {
        flex: 1,
        width: '100%',
        padding: 3,
    },

    txt: {
      fontSize: 30
    },

})




