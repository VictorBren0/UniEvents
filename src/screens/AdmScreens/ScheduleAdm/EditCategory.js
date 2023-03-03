import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Inputs from '../../../components/input';
import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';

export default function EditCategory({ navigation }) {

    const [category, setCategory] = useState(null);

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleSelectItem = (itemId) => {
        setSelectedItemId(itemId);
    }

    const categoryInput = createRef();
    const items = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 3' },
        { id: '5', title: 'Item 3' },
        { id: '6', title: 'Item 3' },
        { id: '7', title: 'Item 3' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingBottom: 180 }} />

            <View style={styles.spaceText}>
                <Text style={styles.text}>Selecione a Categoria:  </Text>
            </View>
            <Dropdown items={items} onSelect={handleSelectItem} />
            <View style={styles.spaceText}>
                <Text style={styles.text}>Novo Nome da Categoria:  </Text>
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
            <View style={{ paddingBottom: 150 }} />
            <CustomButton
                text="Salvar"
                backgroundColor="#4CD640"
                textColor="#FFFFFF"
                onPress={() => navigation.navigate("ProfileEdit")}
                style={{ marginBottom: 20 }}
            />
            <CustomButton
                text="Remover"
                backgroundColor="#C71717"
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