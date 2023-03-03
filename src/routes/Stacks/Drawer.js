import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Drawer//
import Home from '../../screens/UserScreens/Home';
import Faq from '../../screens/UserScreens/Faq';









const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
      drawerLabelStyle: {paddingRight: 25, fontFamily: 'Rubik-Regular', fontSize: 16},
      drawerActiveBackgroundColor: '#F8E257',
      drawerActiveTintColor: '#2C2626',
      drawerInactiveTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#093D73',
      },
      headerTintColor: '#FFFFFF',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        

      },
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
        name="Notification"
        component={Home}
        options={{
          title: 'Notificações',
          drawerIcon: ({color}) => (
            <Icon name={'notifications'} size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          title: 'FAQ',
          drawerIcon: ({color}) => (
            <Icon name={'library-books'} size={22} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
    
  );
}


