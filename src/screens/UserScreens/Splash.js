import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import Logo from '../../assets/image/Nassau.png';


export function Splash({ navigation }) {

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'InitialScreen' }],
      });
    }, 3000); // tempo em milissegundos
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <Animated.View
        style={[
          styles.containerText,
          { transform: [{ translateY: animation }] },
        ]}
      >
      <Text style={styles.text}>UniEvents</Text>
      <Text style={styles.text2}>Aracaju</Text>
      </Animated.View>

      <LottieView
        source={require('../../assets/json/47956-area-map.json')}
        autoPlay
        hardwareAccelerationAndroid={false}
        speed={0.6}
        style={styles.animacao}
      />
      <LottieView
        source={require('../../assets/json/loading.json')}
        autoPlay
        hardwareAccelerationAndroid={false}
        speed={0.4}
        style={styles.animacao2}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#093D73',
  },
  containerText: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animacao: {
    top: 50
  },
  animacao2: {
    top: 200
  },
  image: {
    flex: 0.1,
    height: "10%",
    width: "20%",
  },
  text2: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    bottom: 20
  },
  text: {
    flex: 0.3,
    fontFamily: 'WorkSans-Bold',
    fontSize: 60,
    color: '#FFFFFF',
    bottom: 20
  }

});