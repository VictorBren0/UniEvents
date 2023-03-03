import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import Logo from '../../assets/image/LOGO.png';

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 100 }}>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.bottonText, { color: '#0C264F' }]}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
          <Text style={[styles.bottonText, { color: '#EFD741' }]}>Convidado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#093D73',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    height: "25%",
  },
  buttonLogin: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8E257',
    borderRadius: 10,
    elevation: 2,
  },
  bottonText: {
    fontFamily: 'Rubik-One',
    fontSize: 22

  }

});