import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerMap from '../../components/CustomDrawerMap';

//Drawer//
import Map from '../../screens/UserScreens/Map'









const DrawerMap = createDrawerNavigator();

export default function MyDrawerMap({navigation}) {
  return (
    <DrawerMap.Navigator drawerContent={props => <CustomDrawerMap {...props} />} screenOptions={{headerShown: false}}>
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


