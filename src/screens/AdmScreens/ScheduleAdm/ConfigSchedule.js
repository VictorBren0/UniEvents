import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
      name: 'Adicionar Categoria',
      icon: 'add-circle',
      page: 'AddCategory'
    },
    {
      name: 'Editar Categoria',
      icon: 'do-not-disturb-on',
      page: 'EditCategory'
    },
    {
      name: 'Adicionar Evento',
      icon: 'add-circle',
      page: 'AddEvent'
    },
    {
      name: 'Editar Evento',
      icon: 'do-not-disturb-on',
      page: 'EditEvent'
    },
]



export default function ConfigSchedule({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 100 }}/>
      <FlatList
          data={DATA}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
                <View style={{paddingTop: 40 }}>
                    
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.page);
                  }}
                  style={styles.card}>
                  <Icon name={item.icon} size={30} color={'#EFD741'} />
                  <Text style={styles.textCard}>{item.name}</Text>
                </TouchableOpacity>
                </View>
            );
          }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#3D0128',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 285,
    height: 74,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EFD741',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCard: {
    fontFamily: 'Rubik-One',
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20
  }

});