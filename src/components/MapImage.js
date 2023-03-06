import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

export default function MapImage({ selectedItem }) {
  const [zoomFactor, setZoomFactor] = useState(1);

  const handleZoom = () => {
    setZoomFactor(zoomFactor + 0.1);
  };

  return (
    <PinchGestureHandler
      onGestureEvent={({ nativeEvent }) => setZoomFactor(nativeEvent.scale)}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          setZoomFactor(1);
        }
      }}
    >
      <Image
        source={{ uri: `http://152.67.35.21:3000/uploads/${selectedItem}` }}
        style={styles.image}
        resizeMode='contain'
        transform={[{ scale: zoomFactor }]}
      />
    </PinchGestureHandler>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 140,
  },
});
