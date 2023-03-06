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
import { getMaps } from '../../services/api';
import { useRoute } from '@react-navigation/native';
import MapImage from '../../components/MapImage';


export default function Map({ navigation}) {

  const route = useRoute();
  const data = route.params?.data;
  console.log(data)

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [listMap, setListMap] = useState([]);
  const [apiAvailable, setApiAvailable] = useState(true);


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
  },[])

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
      <View style={{ padding: 30 }}>
        <Text style={styles.titleText}>
          Selecione o local desejado:
        </Text>
      </View>

      <FlatList
        data={listMap}
        horizontal
        showsHorizontalScrollIndicator={false}
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
          <MapImage selectedItem={selectedItem} />
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
  button: {
    width: 130,
    height: 55,
    backgroundColor: '#C5CEA0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: '#0C264F'
  },
  selectedButtonText: {
    borderBottomWidth: 3,
    borderBottomColor: '#0C264F',
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