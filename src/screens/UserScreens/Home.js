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
        <View style={{ paddingBottom: 60 }}/>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 100 }}/>
      <FlatList
          data={DATA}
          keyExtractor={item => item.name}
          numColumns={2}
          renderItem={({item}) => {
            return (
                <View style={{padding: 5}}>
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
    width: 166,
    height: 136,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2E5887'
  },
  textCard: {
    fontFamily: 'Rubik-One',
    fontSize: 14,
    color: '#F8E257',
    paddingTop: 15
  }

});