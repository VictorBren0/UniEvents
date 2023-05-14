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
import Logo from '../../../assets/image/Nassau.png';
import CustomButton from '../../../components/CustomButton';




export default function Map({ navigation }) {

  const route = useRoute();
  const data = route.params?.data;

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
  }, [])

  console.log(selectedId)
  
  const scrollToIndex = index => {
      scrollRef.current.scrollToIndex({ animated: true, index });
    }
  

  useEffect(() => {
    if (data && data.id !== selectedId) {
      setSelectedId(data.id);
    }
    if (data && data.file !== selectedItem) {
      setSelectedItem(data.file);
    }
    if (selectedId !== null) {
      scrollToIndex(selectedId - 1);
    }
  }, [data, selectedId]);

  const scrollRef = useRef(null);
  const indicatorRef = useRef(null);

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
        <View ref={indicatorRef} style={styles.scrollIndicator} />
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
    width: '20%',
    height: 10,
    bottom: 3,
    backgroundColor: '#0C488B',
    borderRadius: 20,

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
    color: '#0C264F'
  },
  selectedButtonText: {
    borderTopWidth: 2,
    borderBottomColor: 'red',
    fontSize: 19,
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