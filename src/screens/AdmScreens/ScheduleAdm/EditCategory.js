import React, { useState, useEffect, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Inputs from '../../../components/input';
import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';
import { getCategorys, putCategorys, deleteCategorys } from '../../../services/api';

export default function EditCategory({ navigation }) {

    const [category, setCategory] = useState(null);
    const [event, setEvent] = useState(null);
    const [newCategory, setNewCategory] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleSelectItem = (id) => {
        setSelectedItemId(id);
    }

    const getCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    const getEvents = (itemId) => {
        setSelectedItemId(itemId);
        if (category && itemId) {
          const categoryEvents = category.find((cat) => cat.id === itemId);
          setEvent(categoryEvents.events);
        }
      };

    useEffect(() => {
        getCategory();
    }, []);

    const newCategoryInput = createRef();

    const handleSave = async () => {
        if (!selectedItemId) {
            alert('Selecione uma categoria');
            return;
        }
        if (!newCategory) {
            alert('Digite o novo nome da categoria');
            return;
        }
        try {
            await putCategorys(selectedItemId, newCategory);
            alert('Categoria atualizada com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar a categoria');
        }
    }

    const handleDelete = async () => {
        if (!selectedItemId) {
            alert('Selecione uma categoria');
            return;
        }
        if (getEvents.length > 0) {
            alert('Existem eventos nessa categoria. Por favor, remova-os antes de excluir a categoria.');
            return;
          }
        try {
            await deleteCategorys(selectedItemId);
            alert('Categoria removida com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao remover a categoria');
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingBottom: 180 }} />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Selecione a Categoria:  </Text>
                </View>
                <Dropdown items={category} onSelect={handleSelectItem} />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Novo Nome da Categoria:  </Text>
                </View>
                <Inputs
                    ref={newCategoryInput}
                    autoCapitalize='none'
                    value={newCategory}
                    autoCorrect={false}
                    iconName={''}
                    length={35}
                    onChangeText={text => setNewCategory(text)}
                />
                <View style={{ paddingBottom: 150 }} />
                <CustomButton
                    text="Salvar"
                    backgroundColor="#F8E257"
                    textColor="#093D73"
                    onPress={handleSave}
                    style={{ marginBottom: 20 }}
                />
                <CustomButton
                    text="Remover"
                    backgroundColor="#F8E257"
                    textColor="#093D73"
                    onPress={handleDelete}
                    style={{ marginBottom: 20 }}
                />

            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        fontFamily: 'WorkSans-Regular',
        fontSize: 16,
        color: '#093D73',
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