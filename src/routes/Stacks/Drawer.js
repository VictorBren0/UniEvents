import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Drawer//
import Home from '../../screens/UserScreens/Home';
import Faq from '../../screens/UserScreens/Faq';
import Notification from '../../screens/UserScreens/Notification';










const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
      headerShown: false,
      drawerLabelStyle: {paddingRight: 25, fontFamily: 'WorkSans-Regular', fontSize: 16},
      drawerActiveBackgroundColor: '#F8E257',
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
        name="Notification"
        component={Notification}
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


