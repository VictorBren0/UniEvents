import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { PinchGestureHandler, State, PanGestureHandler } from 'react-native-gesture-handler';

export default function MapImage({ selectedItem }) {
  const [baseScale, setBaseScale] = useState(1);
  const [pinchScale, setPinchScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [minScale, setMinScale] = useState(0.5);
  const [maxScale, setMaxScale] = useState(3);

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

  const handlePan = ({ nativeEvent }) => {
    setOffsetX(nativeEvent.translationX);
  };

  const handlePanEnd = () => {
    setOffsetX(0);
  };

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
      <PinchGestureHandler
        onGestureEvent={handlePinch}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.END) {
            handlePinchEnd();
          }
        }}
      >
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
      </PinchGestureHandler>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 140,
  },
});
