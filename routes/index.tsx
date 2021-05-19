import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {GlobalStyles} from "../assets/styles/theme";

import HomeView from "../views/Home";






let HomeStack = createStackNavigator();

const NavigationMap: React.FC =()=>(
<NavigationContainer>

    <HomeStack.Navigator 
    screenOptions={{...GlobalStyles.header,headerTitleAlign:"center"}}
    
    initialRouteName='home' >

        <HomeStack.Screen name='home'  component={HomeView} />

    </HomeStack.Navigator>


</NavigationContainer>
)


export default NavigationMap;
