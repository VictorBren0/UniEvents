import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClickImage({ selectedItem, onPositionSelected }) {
  const [lastPosition, setLastPosition] = useState(null);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const position = { x: locationX, y: locationY };
    setLastPosition(position);
    onPositionSelected && onPositionSelected(position);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{ uri: `http://152.67.35.21:3000/uploads/${selectedItem}` }}
        style={styles.image}
        resizeMode='contain'
      />
      {lastPosition && (
        <View
          style={[
            styles.dot,
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
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});
