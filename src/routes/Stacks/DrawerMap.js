import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerMap from '../../components/CustomDrawerMap';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Drawer//
import Map from '../../screens/UserScreens/Map'









const DrawerMap = createDrawerNavigator();

export default function MyDrawerMap({navigation}) {
  return (
    <DrawerMap.Navigator drawerContent={props => <CustomDrawerMap {...props} />} screenOptions={{
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
      <DrawerMap.Screen
        name="Map"
        component={Map}
        options={{
          title: 'Mapa'
        }}
      />
    </DrawerMap.Navigator>
  );
}


