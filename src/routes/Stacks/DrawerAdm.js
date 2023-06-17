import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawerAdm';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Drawer//
import Home from '../../screens/UserScreens/Home';
import Faq from '../../screens/UserScreens/Faq';
import Notification from '../../screens/UserScreens/Notification';
import ConfigAdm from '../../screens/AdmScreens/ConfigAdm';










const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#093D73',
      },
      headerTintColor: '#FFFFFF',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      drawerLabelStyle: {paddingRight: 25, fontFamily: 'WorkSans-Regular', fontSize: 16},
      drawerActiveBackgroundColor: '#FFFFFF',
      drawerActiveTintColor: '#093D73',
      drawerInactiveTintColor: '#FFFFFF',
    }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          drawerIcon: ({color}) => (
            <Icon name={'home'} size={22} color={color} />
          )
        }}
      />
            <Drawer.Screen
        name="ConfigAdm"
        component={ConfigAdm}
        options={{
          title: 'Configurações',
          headerShown: true,
          drawerIcon: ({color}) => (
            <Icon name={'settings'} size={22} color={color} />
          )
        }}
      />

    </Drawer.Navigator>
    
  );
}


