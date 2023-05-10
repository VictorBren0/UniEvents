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
import Logo from '../../../assets/image/Nassau.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: '1',
    name: 'EVENTOS',
    icon: 'article',
    page: 'ConfigSchedule'
  },
  {
    id: '2',
    name: 'MAPA',
    icon: 'map',
    page: 'DrawerMap'
  },
  {
    id: '3',
    name: 'AGENDA',
    icon: 'event',
    page: 'Schedule'
  },
  {
    id: '4',
    name: 'FAQ',
    icon: 'forum',
    page: 'Faq'
  },
]



export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={40} color={'#093D73'} />
        </TouchableOpacity>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </View>

      <View style={styles.contentTitle}>
        <Text style={styles.title}>Inicio</Text>
        <View style={styles.separator} />
        <Text style={styles.subTitle}>Selecione uma das opções abaixo:</Text>
      </View>
      <View style={{ paddingTop: 30 }}/>
      <FlatList
        data={DATA}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 15 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.page);
                }}
                style={styles.contentCard}>
                <Icon name={item.icon} size={30} color={'#FFFFFF'} />
                <Text style={styles.textCard}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
        <View style={styles.separator2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#093D73',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '23%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  contentTitle: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    paddingBottom: 5,
    paddingRight: 250
  },
  separator: {
    height: 2,
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },

  image: {
    width: "30%",
    height: "60%",
  },
  contentCard: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#093D73',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  textCard: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 17,
    color: '#FFFFFF',
  },
  separator2: {
    height: 1,
    opacity: 0.5,
    width: '80%',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },


});