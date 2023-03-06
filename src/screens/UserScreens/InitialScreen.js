import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import Logo from '../../assets/image/LOGO.png';
import CustomButton from '../../components/CustomButton';

export default function InitialScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{paddingTop: 130, alignItems: 'center'}}>
        <CustomButton
          text="Entrar"
          backgroundColor="#EFD741"
          textColor="#0C264F"
          onPress={() => navigation.navigate('Login')}
          style={{marginBottom: 20}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Text style={styles.bottonText}>Convidado</Text>
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
    justifyContent: 'center',
  },
  image: {
    height: '25%',
  },
  bottonText: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 22,
    color: '#EFD741',
  },
});
