import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PinchGestureHandler, State, PanGestureHandler } from 'react-native-gesture-handler';
import { getMaps } from '../services/api';

export default function MapImage({ selectedItem, selectedId }) {
  const [baseScale, setBaseScale] = useState(1);
  const [pinchScale, setPinchScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [minScale, setMinScale] = useState(0.5);
  const [maxScale, setMaxScale] = useState(3);
  const [listMap, setListMap] = useState([]);
  const [selected, setSelected] = useState(null);


  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
  };

  useEffect(() => {
    getMap()
  }, [])

  const handlePinch = ({ nativeEvent }) => {
    const nextScale = pinchScale * nativeEvent.scale;
    if (nextScale >= minScale && nextScale <= maxScale) {
      setPinchScale(nextScale);
    }
  };

  const handlePinchEnd = () => {
    const nextScale = baseScale * pinchScale;
    if (nextScale < minScale) {
      setBaseScale(minScale);
      setPinchScale(0);
    } else if (nextScale > maxScale) {
      setBaseScale(maxScale);
      setPinchScale(0);
    } else {
      setBaseScale(nextScale);
      setPinchScale(1);
    }
  };
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
    // resetar as escalas quando o selectedItem mudar
    setBaseScale(1);
    setPinchScale(1);
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
        <PinchGestureHandler
          onGestureEvent={handlePinch}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.END) {
              handlePinchEnd();
            }
          }}
        >
          <View>
            <Image
              source={{ uri: `http://152.67.35.21:3000/uploads/${selectedItem}` }}
              style={[
                styles.image,
                {
                  transform: [
                    { scale: baseScale * pinchScale },
                    { translateX: offsetX },
                  ],
                },
              ]}
              resizeMode='contain'
            />
            {listMap.find(item => item.id === selectedId)?.events?.map(event => (
              <TouchableOpacity
                onPress={() => handlePress(event.id)}
                style={{
                  position: 'absolute',
                  left: event.posx - 5,
                  top: event.posy - 5,
                  transform: [
                    { scale: baseScale * pinchScale },
                    { translateX: offsetX },
                  ],
                }}>
                <Icon
                  size={selected === event.id ? 25 : 20}
                  key={event.id}
                  color={selected === event.id ? 'red' : 'black'}
                  name={'person'}
                />
                {selected === event.id && (
                  <Text style={styles.text}>
                    {event.title}
                  </Text>
                )}

              </TouchableOpacity>
              
            ))}
            
          </View>
        </PinchGestureHandler>
      </View>
    </PanGestureHandler>
    
  );
}


const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 140,
  },
  icon: {
    position: 'absolute',
  },
  text: {
    color: 'red',
    textAlign: 'center',
    right: 20
  }
});
