import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import { getMaps } from '../../../services/api';
import { useRoute } from '@react-navigation/native';
import MapImage from '../../../components/MapImage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/image/Nassau.png';




export default function Map({ navigation }) {

  const route = useRoute();
  const data = route.params?.data;
  console.log(data)

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [listMap, setListMap] = useState([]);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [posy, setPosy] = useState([]);
  const [posx, setPosx] = useState([]);



  const getMap = async () => {
    try {
      const response = await getMaps();
      setListMap(response.data);
      setApiAvailable(true); // atualiza a variável para indicar que a API está funcionando
    } catch (error) {
      setApiAvailable(false); // atualiza a variável para indicar que a API está indisponível
    }
  };

  useEffect(() => {
    getMap()
  }, [])

  useEffect(() => {
    if (data && data.id !== selectedId) {
      setSelectedId(data.id);
    }
    if (data && data.file !== selectedItem) {
      setSelectedItem(data.file);
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {!apiAvailable && ( // verifica se a API está indisponível e exibe uma mensagem de alerta
        <View>
          <Text style={styles.alertText}>Estamos indisponível no momento! Tente novamente mais tarde.</Text>
        </View>
      )}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={40} color={'#FFFFFF'} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Mapa</Text>
      </View>

      <View style={styles.contentTitle}>
        <Text style={styles.textTitle}>
          Selecione o local desejado:
        </Text>
      </View>

      <FlatList
        data={listMap}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setSelectedId(item.id);
              setSelectedItem(item.file);
            }}
          >
            <Text style={[styles.buttonText, item.id === selectedId ? styles.selectedButtonText : null]}>
              {item.floor}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={{ flex: 3 }}>
        {selectedId && (
          <MapImage selectedItem={selectedItem} selectedId={selectedId} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0C488B',
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 25,
    fontFamily: 'WorkSans-Bold',
    color: '#FFFFFF',
    marginRight: 90
  },
  contentTitle: {
    width: '70%',
    height: '7%',
    borderRadius: 15,
    backgroundColor: '#0C488B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    elevation: 5
  },
  textTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    width: 150,
    height: 55,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'WorkSans-Bold',
    color: '#0C264F'
  },
  selectedButtonText: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  titleText: {
    fontSize: 21,
    fontFamily: 'WorkSans-Bold',
    color: '#0C264F',
  },
  alertText: {
    fontSize: 20,
    fontFamily: 'WorkSans-Bold',
    color: 'red',
    textAlign: 'center',
    top: 300
  },
});