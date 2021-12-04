import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PeliculasScreen from '../Screens/PeliculasScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="PeliculasScreen" component={PeliculasScreen}
                options={{headerShow:false, headerTitle:"Carrito"}}
            />

        </Stack.Navigator>

    )
}