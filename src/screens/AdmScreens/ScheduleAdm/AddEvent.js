import React, { useState, createRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Inputs from '../../../components/input';
import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';
import DateTime from '../../../components/DateTime';
import { postEvent, getCategorys } from '../../../services/api';

export default function AddEvent({ navigation }) {

    const [event, setEvent] = useState(null);
    const [description, setDescription] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [category, setCategory] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const eventInput = createRef();
    const descriptionInput = createRef();

    useEffect(() => {
        getCategory();
    }, []);

    const handleSelectItem = (itemId) => {
        setSelectedItemId(itemId);
    }

    const getCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    const handlePost = async () => {
        if (!selectedItemId) {
            alert('Selecione uma categoria');
            return;
        }
        if (!event) {
            alert('Digite o nome do evento');
            return;
        }
        if (!description) {
            alert('Digite a descrição');
            return;
        }
        if (!date) {
            alert('Escolha a data');
            return;
        }
        if (!time) {
            alert('Escolha o horario');
            return;
        }
        try {
            await postEvent(selectedItemId, event, description, date, time);
            alert('Evento adicionado com sucesso');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar o evento');
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingBottom: 10 }} />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Selecione a Categoria:  </Text>
                </View>
                <Dropdown items={category} onSelect={handleSelectItem} />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Nome do Evento:  </Text>
                </View>
                <Inputs
                    ref={eventInput}
                    autoCapitalize='none'
                    value={event}
                    iconName={''}
                    length={35}
                    autoCorrect={false}
                    onChangeText={setEvent}
                />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Descrição do evento:  </Text>
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
                    onChange={setDate} 
                    />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Hora de Inicio do Evento: </Text>
                </View>
                <DateTime 
                    select="time"
                    onChange={setTime} 
                    />
                <View style={{ paddingBottom: 80 }} />
                <CustomButton
                    text="Adicionar"
                    backgroundColor="#F8E257"
                    textColor="#093D73"
                    onPress={handlePost}
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