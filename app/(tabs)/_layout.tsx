import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function TabLayout (){
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'black',
                tabBarStyle:{
                    backgroundColor: 'lightgrey',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                },
                headerStyle:{
                    height: 60
                },
            } }
        >
            
            <Tabs.Screen
                name="home"
                options={{
                    title: 'início',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
                    
                }}
            />

            <Tabs.Screen
                name="categories"
                options={{
                    title: 'categorias',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="archive" color={color}/>,
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'sobre a loja',
                    headerShown:false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>
                }}
            />

            <Tabs.Screen
                name="menu"
                options={{
                    title: 'menu',
                    headerShown:false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="cogs" color={color}/>
                }}
            />


        </Tabs>
    )
}