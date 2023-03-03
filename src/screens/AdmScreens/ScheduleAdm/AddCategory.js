import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Inputs from '../../../components/input';
import CustomButton from '../../../components/CustomButton';

export default function AddCategory({ navigation }) {

    const [category, setCategory] = useState(null);

    const categoryInput = createRef();


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingBottom: 180 }} />

            <View style={styles.spaceText}>
                <Text style={styles.text}>Nome da Categoria:  </Text>
            </View>
            <Inputs
                ref={categoryInput}
                autoCapitalize='none'
                value={category}
                autoCorrect={false}
                iconName={''}
                length={35}
                onChangeText={text => setCategory(text)}
            />
            <View style={{ paddingBottom: 200 }} />
            <CustomButton
                text="Adicionar"
                backgroundColor="#4CD640"
                textColor="#FFFFFF"
                onPress={() => navigation.navigate("ProfileEdit")}
                style={{ marginBottom: 20 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#2C2626',
        alignItems: 'center'
    },
    text: {
        alignItems: 'center',
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#FFFFFF',
    },
    spaceText: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        width: 340,
    },
    button: {
        width: 270,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 10,
    },
    bottonText: {
        fontFamily: 'Rubik-One',
        fontSize: 22
    },

})