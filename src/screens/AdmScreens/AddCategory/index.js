import React, { useState, createRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import Inputs from '../../../components/input';
import CustomButton from '../../../components/CustomButton';
import { postCategorys } from '../../../services/api';


export default function AddCategory({ navigation }) {

    const [category, setCategory] = useState(null);

    const categoryInput = createRef();

    const handlePost = async () => {
        try {
            await postCategorys(category);
            alert('Categoria adicionada com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar a categoria');
        }
    }


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
                backgroundColor="#093D73"
                textColor="#FFFFFF"
                onPress={handlePost}
                style={{ marginBottom: 20 }}
            />
        </SafeAreaView>
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
        left: 10,
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
        fontFamily: 'WorkSans-Bold',
        fontSize: 22
    },

})