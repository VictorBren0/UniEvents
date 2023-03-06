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
import Logo from '../../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
      name: 'EVENTOS',
      icon: 'article',
      page: 'Category'
    },
    {
      name: 'MAPA',
      icon: 'map',
      page: 'DrawerMap'
    },
    {
      name: 'AGENDA',
      icon: 'event',
      page: 'Schedule'
    },
    {
      name: 'FAQ',
      icon: 'forum',
      page: 'Faq'
    },
]



export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ paddingBottom: 40 }}/>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.text}>Selecione uma das opções abaixo:</Text>
        </View>
        <View style={{ paddingTop: 30 }}></View>
      <FlatList
          data={DATA}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
                <View style={{padding: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.page);
                  }}
                  style={styles.card}>
                  <Icon name={item.icon} size={30} color={'#F8E257'} />
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

  image: {
    height: "20%"
  },
  card: {
    width: 285,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2E5887',
    flexDirection: 'row'
  },
  textCard: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 14,
    color: '#F8E257',
    paddingLeft: 90,
    right: 50
  },
  text: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 20,
    color: '#F8E257',
    paddingTop: 15
  }

});