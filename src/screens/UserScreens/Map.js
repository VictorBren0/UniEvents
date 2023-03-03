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

  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
  }

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
      <View style={{ flex: 10 }}>
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
    backgroundColor: '#1C1C1C',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#FFFFFF'
  },
  selectedButtonText: {
    borderBottomWidth: 3,
    borderBottomColor: '#011AFF',
  },
  titleText: {
    fontSize: 21,
    fontFamily: 'Rubik-Regular',
    color: '#FFFFFF'
  },
});