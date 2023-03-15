import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import CustomButton from '../../../components/CustomButton';
import { useRoute } from '@react-navigation/native';

export default function EventInfo({ navigation }) {

    const route = useRoute();
    const data = route.params?.data;

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingTop: 40 }} />
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={{ paddingTop: 40 }} />
                <View style={styles.contentButton}>
                    <View style={styles.button}>
                        <Text style={styles.bottonText}>DATA INÍCIO</Text>
                    </View>
                    <Text style={styles.textContent}>{data.date}</Text>
                    <View style={{ paddingTop: 40 }} />
                    <View style={styles.button}>
                        <Text style={styles.bottonText}>HORA INICIO</Text>
                    </View>
                    <Text style={styles.textContent}>{data.time}</Text>
                    <View style={{ paddingTop: 40 }} />
                </View>
                <View style={{ paddingTop: 40 }} />
                <View>
                    <Text style={styles.bottonText}>DESCRIÇÃO</Text>
                </View>
                <Text style={styles.textContent}>{data.description}</Text>
                <View style={{ paddingTop: 40 }} />
                <Text style={styles.text}>
                    <Text style={styles.bold}>
                        Local do Evento:
                    </Text>
                    Uninassau - Av. Augusto Franco, 2340 - Siqueira Campos, Aracaju - SE, 49075-470
                </Text>
                <View style={{ paddingTop: 40 }} />
                <CustomButton
                    text="Ver Local no Mapa"
                    backgroundColor="#F8E257"
                    textColor="#0C264F"
                    onPress={() => navigation.navigate("DrawerMap")}
                    style={{ marginBottom: 20 }}
                />
                <View style={{ paddingTop: 40 }} />
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
        fontFamily: 'WorkSans-Regular',
        fontSize: 16,
        color: '#093D73',
        width: 320,
    },
    contentButton: {
        width: 320,
        height: 230,
        borderWidth: 1,
        borderColor: '#F8E257',
        alignItems: 'center'
    },
    textContent: {
        fontFamily: 'WorkSans-Regular',
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
        fontFamily: 'WorkSans-Bold',
        fontSize: 23,
        color: '#D5042B'
    },
    title: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 23,
        color: '#093D73'
    },
    bold: {
        fontFamily: 'WorkSans-Bold',
    }
})