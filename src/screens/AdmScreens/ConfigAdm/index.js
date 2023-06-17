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
      name: 'Gerenciar Evento',
      icon: 'settings',
      page: 'ConfigSchedule'
    },
    {
      name: 'Gerenciar mapa',
      icon: 'settings',
      page: 'ConfigMap'
    },
]



export default function ConfigAdm({ navigation }) {
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
                  <Icon name={item.icon} size={30} color={'#093D73'} />
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
    backgroundColor: '#093D73',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 285,
    height: 54,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCard: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 16,
    color: '#093D73',
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 200,
    textAlign: 'center'
  }

});