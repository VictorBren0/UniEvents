import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions 
} from 'react-native';
import Logo from '../../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';

export default function Login({ navigation }) {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingBottom: 50 }}/>
      
      <View style={{flexDirection: 'row' }}>
      <Icon
          name={'person'}
          size={35}
          color={'#FFFFFF'}
          style={styles.icon}
        />
        <TextInput
          placeholder="MATRICULA"
          placeholderTextColor="#FFFFFF"
          style={styles.input}
          />
        </View>
        <View style={{ paddingTop: 35, flexDirection: 'row' }}>
        <Icon
          name={'lock'}
          size={35}
          color={'#FFFFFF'}
          style={styles.icon}
        />
        <TextInput
          placeholder="SENHA"
          placeholderTextColor="#FFFFFF"
          style={styles.input}
        />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.text}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 100 }}>
        <CustomButton
          text="Entrar"
          backgroundColor="#EFD741"
          textColor="#0C264F"
          onPress={() => navigation.navigate('Login')}
          style={{marginBottom: 20}}
        />
      </View>
        
    </SafeAreaView>
    </ScrollView>
  );
}
const {height} = Dimensions.get("window")
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#093D73',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },
  image: {
    height: "20%",
  },
  input: {
    height: 50,
    width: 310,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    paddingLeft: 10,
    fontFamily: 'WorkSans-Regular',
  },
  back: {
    position: 'absolute',
    bottom: 50,
    right: 140
  },
  icon: {
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    paddingTop: 5
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    color: '#EFD741',
    paddingTop: 40,
    paddingLeft: 150
  }

});