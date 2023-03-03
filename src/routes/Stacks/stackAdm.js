import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens ADM//


const AdmStack = createNativeStackNavigator();

export default function StackAdm({ navigation }) {
    return (
        <AdmStack.Navigator screenOptions={{ headerShown: false }}>
        </AdmStack.Navigator>
    );
}
