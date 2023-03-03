import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens Users//



const StackUser = createNativeStackNavigator();


export default function UserStack({ navigation }) {
    return (
        <StackUser.Navigator screenOptions={{ headerShown: false }}>
        </StackUser.Navigator>
    );
}
