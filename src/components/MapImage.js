import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { getMaps } from '../services/api';

const windowWidth = Dimensions.get('window').width;

export default function MapImage({ selectedItem, selectedId }) {
  const [offsetX, setOffsetX] = useState(0);
  const [listMap, setListMap] = useState([]);
  const [selected, setSelected] = useState(null);

  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
  };

  useEffect(() => {
    getMap();
  }, []);

  const handlePress = (id) => {
    setSelected(id);
  };

  const handlePan = ({ nativeEvent }) => {
    setOffsetX(nativeEvent.translationX);
  };

  const handlePanEnd = () => {
    setOffsetX(0);
  };

  useEffect(() => {
    setSelected(null);
  }, [selectedItem]);

  return (
    <PanGestureHandler
      onGestureEvent={handlePan}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          handlePanEnd();
        }
      }}
      avgTouches
    >
      <View>
        <Image
          source={{ uri: `http://152.67.35.21:3000/uploads/${selectedItem}` }}
          style={[
            styles.image,
            {
              transform: [
                { translateX: offsetX },
              ],
            },
          ]}
          resizeMode='contain'
        />
        {listMap.find((item) => item.id === selectedId)?.events?.map((event) => (
          <TouchableOpacity
            onPress={() => handlePress(event.id)}
            style={[
              styles.eventContainer,
              {
                left: (event.posx / 360) * windowWidth - 5,
                top: (event.posy / 360) * windowWidth - 5,
                transform: [{ translateX: offsetX }],
              },
            ]}
            key={event.id}
          >
            <View
              style={[
                styles.square,
                {
                  width: selected === event.id ? 16 : 14,
                  height: selected === event.id ? 16 : 14,
                  backgroundColor: selected === event.id ? 'red' : 'blue',
                },
              ]}
            />
            {selected === event.id && (
              <View style={styles.balloon}>
                <Text style={styles.text}>{event.title}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 140,
  },
  eventContainer: {
    position: 'absolute',
  },
  square: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  balloon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 150,
    height: 50,
    position: 'absolute',
    marginTop: 20,
    right: '13%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5,
  },
  text: {
    color: '#000000',
    fontSize: 15,
    maxWidth: '100%',
    maxHeight: 70,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'center',
  },
});
