import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getMaps } from '../services/api';



export default function EditIconImage({ selectedItem, onPositionSelected, selectedId }) {
  const [lastPosition, setLastPosition] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [listMap, setListMap] = useState([]);

  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
  };

  useEffect(() => {
    getMap()
  }, [])

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const position = { x: locationX, y: locationY };
    setLastPosition(position);
    onPositionSelected && onPositionSelected(position);
  };

  const handleIconPress = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{ uri: `http://152.67.35.21:3000/uploads/${selectedItem}` }}
        style={styles.image}
        resizeMode='contain'
      />
       {listMap.find(item => item.id === selectedId)?.events?.map(event => (
        <TouchableOpacity
          onPress={() => handleIconPress(event.id)}
          onLongPress={(event) => {
            const { locationX, locationY } = event.nativeEvent;
            const position = { x: locationX, y: locationY };
            event.posx = position.x;
            event.posy = position.y;
          }}
          style={{
            position: 'absolute',
            left: event.posx - 5,
            top: event.posy - 5,
          }}
          key={event.id}
        >
          <Icon
            size={selectedIcon === event.id ? 25 : 20}
            color={selectedIcon === event.id ? 'red' : 'black'}
            name={'person'}
          />
          {selectedIcon === event.id && (
            <View>
              <Text style={styles.text}>{event.title}</Text>
              <View />
            </View>
          )}
        </TouchableOpacity>
      ))}
      {lastPosition && (
        <Icon
          name="location-on"
          style={[
            styles.icon,
            { left: lastPosition.x - 5, top: lastPosition.y - 5 },
          ]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 140,
  },
  icon: {
    position: 'absolute',
    fontSize: 20,
    color: 'red',
  },
  balon: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    position: 'absolute',
    bottom: 30,
    left: -50,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  balon_after: {
    position: 'absolute',
    bottom: -5,
    left: 20,
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'white',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'white',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
  },
});
