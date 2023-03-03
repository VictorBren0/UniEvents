import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, Linking } from 'react-native';
import Logo from '../../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Faq({ navigation }) {
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);

    const handlePressVictor = () => {
        Linking.openURL('https://www.linkedin.com/in/victorbsr/');
      };
    
      const handlePressJose = () => {
        Linking.openURL('https://www.linkedin.com/in/josé-henrique-vieira-da-cruz-b2a6021b9/');
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingTop: 30 }} />
            <Image style={styles.image} source={Logo} resizeMode="contain" />
            <View style={{ paddingTop: 30 }} />
            <TouchableOpacity onPress={() => setQuestion1(!question1)}>
                <Text style={styles.question}>
                    O que é UniEvents?
                </Text>
            </TouchableOpacity>
            {question1 && (
                <Text style={styles.answer}>
                    UniEvents é um aplicativo desenvolvido para mostrar onde os eventos da faculdade Mauricio de Nassau irá acontencer.
                </Text>
            )}

            <TouchableOpacity onPress={() => setQuestion2(!question2)}>
                <Text style={styles.question}>
                    Quais são as vantagens de usar o UniEvents?
                </Text>
            </TouchableOpacity>
            {question2 && (
                <Text style={styles.answer}>
                    UniEvents permite ajudar o usuário a encontrar o local desejado mais rapido.
                </Text>
            )}

            <TouchableOpacity onPress={() => setQuestion3(!question3)}>
                <Text style={styles.question}>
                    O UniEvents é gratuito?
                </Text>
            </TouchableOpacity>
            {question3 && (
                <Text style={styles.answer}>
                    Sim, o UniEvents é gratuito.
                </Text>
            )}

            <TouchableOpacity onPress={() => setQuestion4(!question4)}>
                <Text style={styles.question}>
                    Quem foram seus desenvolvedores?
                </Text>
            </TouchableOpacity>
            {question4 && (
                <Text style={styles.answer}>
                Victor Breno Santos Rodrigues{'\n'}
                <Text style={{ color: '#0080FF', textDecorationLine: 'underline' }} onPress={handlePressVictor}>
                  https://www.linkedin.com/in/victorbsr/
                </Text>
                {'\n\n'}
                José Henrique Vieira da Cruz{'\n'}
                <Text style={{ color: '#0080FF', textDecorationLine: 'underline' }} onPress={handlePressJose}>
                  https://www.linkedin.com/in/josé-henrique-vieira-da-cruz-b2a6021b9/
                </Text>
              </Text>
            )}

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={styles.reserved}>
                    Todos os direitos reservados a UniGeek
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#2E5887',
    },
    image: {
        height: "20%",
        justifyContent: 'center',
        left: 35

    },
    question: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Rubik-Regular',
        color: '#FFFF99'
    },
    answer: {
        fontSize: 15,
        marginBottom: 20,
        fontFamily: 'Rubik-Regular',
        color: '#FFFFFF'
    },
    reserved: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Rubik-Regular',
    },
})