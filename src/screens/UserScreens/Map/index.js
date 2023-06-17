import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import { getMaps } from '../../../services/api';
import { useRoute } from '@react-navigation/native';
import MapImage from '../../../components/MapImage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../../components/CustomButton';
import { set } from 'immer/dist/internal';




export default function Map({ navigation }) {

  const route = useRoute();
  const data = route.params?.data;

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [listMap, setListMap] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMap()
  }, [])

  useEffect(() => {
    if (isLoading) {
      return; // Se ainda estiver carregando, não execute o código dentro do useEffect
    }
  
    if (data) {
      setSelectedId(data.id);
      setSelectedItem(data.file);
      route.params.data = null; // definir o parâmetro data como nulo para evitar definir o estado novamente
    } else {
      setSelectedId(1);
      setSelectedItem(listMap[0]?.file);
    }
  }, [isLoading]);

  useEffect(() => {
    if (data && data.id !== selectedId) {
      setSelectedId(data.id);
    }
    if (data && data.file !== selectedItem) {
      setSelectedItem(data.file);
    }

  }, [data, selectedId]);

  const scrollRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (selectedId) {
      const index = listMap.findIndex((item) => item.id === selectedId);
      if (index >= 0) {
        scrollRef.current.scrollToIndex({ index });
      }
    }
  }, [selectedId]);


  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentSize = event.nativeEvent.contentSize.width;
    const indicatorSize = (viewSize / contentSize) * viewSize;
    const indicatorPosition = (contentOffset / (contentSize - viewSize)) * (viewSize - indicatorSize);


    indicatorRef.current.setNativeProps({ style: { left: indicatorPosition } });


  };


  return (
    <SafeAreaView style={styles.container}>
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
      <View style={{ height: '10%' }}>
        <FlatList
          ref={scrollRef}
          data={listMap}
          horizontal
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (

            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                setSelectedId(item.id);
                setSelectedItem(item.file);
              }}
            >
              <Text
                style={[
                  styles.cardText,
                  item.id === selectedId ? styles.selectedButtonText : null,
                ]}
              >
                {item.floor}
              </Text>

            </TouchableOpacity>

          )}
        />
      </View>
      <View style={styles.scroll}>
        <View ref={indicatorRef} style={styles.scrollIndicator}>
          <Text style={styles.textScroll}>{'<<'}</Text>
          <View style={{ width: 14, height: 14, borderRadius: 50, backgroundColor: '#0C488B', top: 13 }}></View>
          <Text style={styles.textScroll}>{'>>'}</Text>

        </View>
      </View>

      <View style={{ flex: 3 }}>
        {selectedId && (
          <MapImage selectedItem={selectedItem} selectedId={selectedId} />
        )}
        {/*         {selectedId && (
          <View style={styles.containerButtons}>
            <Text style={styles.cardText}>Ampliar imagem</Text>
            <View style={styles.contentButtons}>

              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  console.log("Pressed zoom in button");
                  handleZoomIn();
                }}
              >
                <Icon name={'add'} size={30} color={'#0C264F'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  console.log("Pressed zoom out button");
                  handleZoomOut();
                }}
              >
                <Icon name={'remove'} size={30} color={'#0C264F'} />

              </TouchableOpacity>
            </View>
          </View>
        )} */}


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
  scroll: {
    width: '100%',
    height: 3,
    backgroundColor: '#0C264F',
    borderRadius: 20,
    marginBottom: 100,
  },
  scrollIndicator: {
    bottom: 18,
    width: '20%',
    height: 50,
    flexDirection: 'row',
  },
  textScroll: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 25,
    color: '#0C488B',
    letterSpacing: -4
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
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  textTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'WorkSans-Bold',
  },
  card: {
    width: 170,
    height: 55,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 18,
    fontFamily: 'WorkSans-Bold',
    color: '#0C264F',
    opacity: 0.5,
  },
  selectedButtonText: {

    fontSize: 19,
    opacity: 1
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
  containerButtons: {
    marginTop: 100,
    height: '30%',
    alignItems: 'center',

  },
  contentButtons: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0C264F',
  }
});