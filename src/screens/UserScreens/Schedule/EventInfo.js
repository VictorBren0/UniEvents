import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../../components/CustomButton';

export default function EventInfo({ navigation }) {

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingBottom: 40 }} />
                <View>
                    <Text style={styles.title}>Evento</Text>
                </View>

                <View style={{ paddingBottom: 20 }} />
                <View style={styles.contentButton}>
                    <View style={styles.button}>
                        <Text style={styles.bottonText}>DATA INÍCIO</Text>
                    </View>
                    <Text style={styles.textContent}>TEXT</Text>

                    <View style={{ paddingBottom: 40 }} />

                    <View style={styles.button}>
                        <Text style={styles.bottonText}>DATA TÉRMINO</Text>
                    </View>
                    <Text style={styles.textContent}>TEXT</Text>

                    <View style={{ paddingBottom: 40 }} />

                    <View style={styles.button}>
                        <Text style={styles.bottonText}>HORA INICIO</Text>
                    </View>
                    <Text style={styles.textContent}>TEXT</Text>

                    <View style={{ paddingBottom: 40 }} />

                </View>

                <View style={{ paddingBottom: 20 }} />

                <View>
                    <Text style={styles.bottonText}>DESCRIÇÃO</Text>
                </View>
                <Text style={styles.textContent}>TEXT</Text>
                <View style={{ paddingBottom: 30 }} />
                <Text style={styles.text}>
                    <Text style={styles.bold}>
                        Local do Evento:
                    </Text>
                    Uninassau - Av. Augusto Franco, 2340 - Siqueira Campos, Aracaju - SE, 49075-470
                </Text>
                <View style={{ paddingBottom: 40 }} />
                <CustomButton
                    text="Ver Local no Mapa"
                    backgroundColor="#F8E257"
                    textColor="#0C264F"
                    onPress={() => navigation.navigate("DrawerMap")}
                    style={{ marginBottom: 20 }}
                />
                <View style={{ paddingBottom: 40 }} />
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    text: {
        alignItems: 'center',
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#093D73',
        width: 320,
    },
    contentButton: {
        width: 320,
        height: 330,
        borderWidth: 1,
        borderColor: '#F8E257',
        alignItems: 'center'
    },
    textContent: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#093D73',
        top: 10
    },
    button: {
        width: 318,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#FBFAAC',
        justifyContent: 'center',
    },
    bottonText: {
        fontFamily: 'Rubik-One',
        fontSize: 23,
        color: '#D5042B'
    },
    title: {
        fontFamily: 'Rubik-One',
        fontSize: 23,
        color: '#093D73'
    },
    bold: {
        fontFamily: 'Rubik-One',
    }
})