import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../../assets/image/Nassau.png';


import CustomButton from '../../../components/CustomButton';
import { useRoute } from '@react-navigation/native';


export default function EventInfo({ navigation }) {

    const route = useRoute();

    const data = route.params?.data;

    const handleOpenInMaps = () => {
        const location = 'Uninassau - Av. Augusto Franco, 2340 - Siqueira Campos, Aracaju - SE, 49075-470';
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        Linking.openURL(url);
      };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={'arrow-back'} size={40} color={'#FFFFFF'} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Agenda</Text>
            </View>

            <ScrollView>

                <View style={styles.contentTitle}>
                    <Image style={styles.image} source={logo} resizeMode="contain" />
                    <Text style={styles.textTitle}>{data.title}</Text>
                </View>

                <View style={styles.contentButton}>
                    <View style={styles.button}>

                        <Icon name={'event-note'} size={40} color={'#000000'} />
                        <View>
                            <Text style={styles.textButton}>DATA INÍCIO</Text>
                            <Text style={styles.textContent}>{data.date}</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Icon name={'timer'} size={40} color={'#000000'} />
                        <View>
                            <Text style={styles.textButton}>HORA INICIO</Text>
                            <Text style={styles.textContent}>{data.time}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.contentDescription}>
                    <Text style={styles.titleDescription}>DESCRIÇÃO</Text>
                
                <Text style={styles.textDescription}>{data.description}</Text>
                </View>

                <View style={styles.contentEvent}>
                <Text style={styles.titleDescription}>Local do Evento</Text>
                <Text style={styles.textEvent}>Uninassau - Av. Augusto Franco, 2340 - Siqueira Campos, Aracaju - SE, 49075-470</Text>
                </View>

                <View style={{ paddingTop: 40, alignItems: 'center' }}>
                <CustomButton
                    text="Ver endereço"
                    backgroundColor="#0C488B"
                    textColor="#FFFFFF"
                    onPress={handleOpenInMaps}
                    style={{ marginBottom: 20 }}
                />
                <CustomButton
                    text="Ver Local no Mapa"
                    backgroundColor="#0C488B"
                    textColor="#FFFFFF"
                    onPress={() =>  navigation.navigate('DrawerMap', {data: data.maps[0]})}
                    style={{ marginBottom: 20 }}
                />
                </View>
                <View style={{ paddingTop: 40 }} />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0C488B',
        flexDirection: 'row',
    },
    textHeader: {
        fontSize: 25,
        fontFamily: 'WorkSans-Bold',
        color: '#FFFFFF',
        marginRight: 90
    },
    textContent: {
        fontFamily: 'WorkSans-Bold',
        color: '#000000',
        fontSize: 20,
    },
    textButton: {
        fontFamily: 'WorkSans-Regular',
        color: '#000000',
        fontSize: 15,
    },
    contentTitle: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
    },
    textTitle: {
        fontFamily: 'WorkSans-Bold',
        width: '50%',
        color: '#093D73',
        fontSize: 23,
    },
    image: {
        height: "70%",
        width: "30%",
    },
    contentButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginRight: 10,
        width: '86%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#093D73',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingRight: 80,
        marginTop: 20,
    },
    contentDescription: {
        width: '100%',
        maxHeight: 120,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    titleDescription: {
        fontFamily: 'WorkSans-Bold',
        color: '#000000',
        fontSize: 20,
        marginBottom: 10,
    },
    textDescription: {
        fontFamily: 'WorkSans-Regular',
        color: '#093D73',
        fontSize: 15,
    },
    contentEvent: {
        width: '100%',
        maxHeight: 120,
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    textEvent: {
        fontFamily: 'WorkSans-Regular',
        color: '#093D73',
        fontSize: 15,
        textAlign: 'center',
        right: 10,
    }

})