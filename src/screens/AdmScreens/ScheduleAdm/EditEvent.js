import React, { useState, createRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Inputs from '../../../components/input';
import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';
import DateTime from '../../../components/DateTime';
import { getCategorys, putEvent, deleteEvets } from '../../../services/api';

export default function EditEvent({ navigation }) {

    const [event, setEvent] = useState(null);
    const [category, setCategory] = useState(null);
    const [newEvent, setNewEvent] = useState(null);
    const [description, setDescription] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [selectedItemId1, setSelectedItemId1] = useState(null);
    const [selectedItemId2, setSelectedItemId2] = useState(null);


    const newEventInput = createRef();
    const descriptionInput = createRef();

    const getCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    useEffect(() => {
        getCategory();
    }, []);
    

    const handleSelectItem1 = (itemId) => {
        setSelectedItemId1(itemId);
        if (category && itemId) {
          const selectedCategory = category.find((cat) => cat.id === itemId);
          setEvent(selectedCategory.events);
        }
      };

    const handleSelectItem2 = (itemId) => {
        setSelectedItemId2(itemId);
    }

    const handleSave = async () => {
        if (!selectedItemId1) {
            alert('Selecione uma categoria');
            return;
        }
        if (!selectedItemId2) {
            alert('Selecione um evento');
            return;
        }
        if (!newEvent) {
            alert('Digite o nome do novo do evento');
            return;
        }
        if (!description) {
            alert('Digite a nova descrição');
            return;
        }
        if (!date) {
            alert('Escolha a nova data');
            return;
        }
        if (!time) {
            alert('Escolha o novo horario');
            return;
        }
        try {
            await putEvent(selectedItemId1, selectedItemId2, newEvent, description, date, time);
            alert('Evento adicionado com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar o evento');
        }
    }

    const handleDelete = async () => {
        if (!selectedItemId1) {
            alert('Selecione uma categoria');
            return;
        }
        if (!selectedItemId2) {
            alert('Selecione um evento');
            return;
        }
        try {
            await deleteEvets(selectedItemId1, selectedItemId2);
            alert('Evento removido com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao remover o evento');
        }
    }


    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingBottom: 10 }} />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Selecione a Categoria:  </Text>
                </View>
                <Dropdown items={category} onSelect={handleSelectItem1} />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Selecione o Evento:  </Text>
                </View>
                <Dropdown items={event} onSelect={handleSelectItem2} disabled={!selectedItemId1} />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Novo Nome do Evento:  </Text>
                </View>
                <Inputs
                    ref={newEventInput}
                    autoCapitalize='none'
                    value={newEvent}
                    autoCorrect={false}
                    iconName={''}
                    length={35}
                    onChangeText={setNewEvent}
                />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Nova Descrição do Evento:  </Text>
                </View>
                <Inputs
                    ref={descriptionInput}
                    autoCapitalize='none'
                    value={description}
                    autoCorrect={false}
                    iconName={''}
                    length={230}
                    inputStyle={{ height: 150 }}
                    onChangeText={setDescription}
                />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Data de Inicio do Evento:  </Text>
                </View>
                <DateTime
                    select="date"
                    onChange={setDate} />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Hora de Inicio do Evento: </Text>
                </View>
                <DateTime
                    select="time"
                    onChange={setTime} />
                <View style={{ paddingBottom: 80 }} />
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
                <View style={{ paddingTop: 30 }} />

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