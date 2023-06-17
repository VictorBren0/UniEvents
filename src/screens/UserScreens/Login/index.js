import React, { useState, createRef } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import Logo from '../../../assets/image/Nassau.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../../components/CustomButton';
import Inputs from '../../../components/input';

export default function Login({ navigation }) {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);


  const loginInput = createRef();
  const passwordInput = createRef();

  return (

    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={styles.contentTitle}>
      <Icon name={'arrow-back'} size={40} color={'#000000'} />
        <View>
        <Text style={styles.title}>Digite o solicitado</Text>
        <Text style={styles.subTitle}>#Digite as credencias para começar</Text>
        </View>
      </View>

            <View style={styles.contentInput}>
        <Inputs
          ref={loginInput}
          autoCapitalize='none'
          placeholder="Login"
          value={login}
          autoCorrect={false}
          iconName={''}
          length={30}
          onChangeText={text => setLogin(text)}
        />
        <Inputs
          ref={passwordInput}
          autoCapitalize='none'
          placeholder="Senha"
          value={password}
          autoCorrect={false}
          iconName={''}
          length={30}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{ paddingTop: 100 }}>
        <CustomButton
          text="Entrar"
          backgroundColor="#093D73"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('DrawerAdmin')}
          style={{ marginBottom: 20 }}
        />
      </View>

    </SafeAreaView>

  );
}
const { height } = Dimensions.get("window")
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    height: "12%",
  },
  contentInput: {
    width: "90%",
    height: "20%",
    marginTop: 100,

  },
  contentTitle: {
    width: "90%",
    height: "10%",
    flexDirection: "row",
    marginTop: 40,
  },
  title: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
    left: 20,
  },
  subTitle: {
    fontFamily: 'WorkSans-Regular',
    color: '#000000',
    textAlign: 'center',
    left: 20,
  },

});