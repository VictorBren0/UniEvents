import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//
//ScreensInital//
import InitialScreen from '../../screens/UserScreens/InitialScreen'
import Login from '../../screens/UserScreens/Login'
import Home from '../../screens/UserScreens/Home';
import Drawer from './Drawer'
import DrawerMap from './DrawerMap';




//Screens ADM//
import ConfigSchedule from '../../screens/AdmScreens/ScheduleAdm/ConfigSchedule';
import AddCategory from '../../screens/AdmScreens/ScheduleAdm/AddCategory';
import EditCategory from '../../screens/AdmScreens/ScheduleAdm/EditCategory';
import AddEvent from '../../screens/AdmScreens/ScheduleAdm/AddEvent';
import EditEvent from '../../screens/AdmScreens/ScheduleAdm/EditEvent';
import Schedule from '../../screens/UserScreens/Schedule/Schedule';
import EventInfo from '../../screens/UserScreens/Schedule/EventInfo';
import ConfigMap from '../../screens/AdmScreens/MapAdm/ConfigMap';
import EventMapAdd from '../../screens/AdmScreens/MapAdm/EventMapAdd';
import EventMapEdit from '../../screens/AdmScreens/MapAdm/EventMapEdit';
import { Splash } from '../../screens/UserScreens/Splash';

//Screens Users//



const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, 
      headerStyle: {
      backgroundColor: '#093D73',
    },
    headerTintColor: '#FFFFFF',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 22,
    }, }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="InitialScreen" component={InitialScreen} />
      <Screen name="Login" component={Login} options={{ headerShown: true, title: 'Login' }}/>


      <Screen name="Drawer" component={Drawer} />
      <Screen name="DrawerMap" component={DrawerMap} />

      <Screen name="Home" component={Home} />
      <Screen name="Schedule" component={Schedule} options={{ headerShown: true, title: 'Agenda' }}/>
      <Screen name="EventInfo" component={EventInfo} options={{ headerShown: true, title: 'Informação do Evento' }}/>




      <Screen name="ConfigSchedule" component={ConfigSchedule} options={{ headerShown: true, title: 'Configurar Agenda' }}/>
      <Screen name="AddCategory" component={AddCategory} options={{ headerShown: true, title: 'Adicionar Categoria' }}/>
      <Screen name="EditCategory" component={EditCategory} options={{ headerShown: true, title: 'Editar Categoria' }}/>
      <Screen name="AddEvent" component={AddEvent} options={{ headerShown: true, title: 'Adicionar Evento' }}/>
      <Screen name="EditEvent" component={EditEvent} options={{ headerShown: true, title: 'Editar Evento' }}/>
      <Screen name="ConfigMap" component={ConfigMap} options={{ headerShown: true, title: 'Configurar Mapa' }}/>
      <Screen name="EventMapAdd" component={EventMapAdd} options={{ headerShown: true, title: 'Adicionar Evento no Mapa' }}/>
      <Screen name="EventMapEdit" component={EventMapEdit} options={{ headerShown: true, title: 'Editar Evento no Mapa' }}/>



    </Navigator>
  );
}
