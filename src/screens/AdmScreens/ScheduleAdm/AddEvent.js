import React, { useState, createRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Inputs from '../../../components/input';
import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';
import DateTime from '../../../components/DateTime';

export default function AddEvent({ navigation }) {

    const [event, setEvent] = useState(null);
    const [description, setDescription] = useState(null);
    const [dataI, setDataI] = useState(null);
    const [dataT, setDataT] = useState(null);
    const [horaI, setHoraI] = useState(null);
    const [horaT, setHoraT] = useState(null);

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleSelectItem = (itemId) => {
        setSelectedItemId(itemId);
    }

    const eventInput = createRef();
    const descriptionInput = createRef();
    const dataIInput = createRef();
    const dataTInput = createRef();
    const horaIInput = createRef();
    const horaTInput = createRef();

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
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingBottom: 10 }} />

                <View style={styles.spaceText}>
                    <Text style={styles.text}>Selecione a Categoria:  </Text>
                </View>
                <Dropdown items={items} onSelect={handleSelectItem} />
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
                    onChangeText={text => setEvent(text)}
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
                    onChangeText={text => setDescription(text)}
                />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Data de Inicio do Evento:  </Text>
                </View>
                <DateTime 
                    select="date"
                    selectedDate />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Data de Termino do Evento:  </Text>
                </View>
                <DateTime 
                    select="date"
                    selectedDate />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Hora de Inicio do Evento: </Text>
                </View>
                <DateTime 
                    select="time"
                    selectedTime />
                <View style={{ paddingBottom: 80 }} />
                <CustomButton
                    text="Adicionar"
                    backgroundColor="#F8E257"
                    textColor="#093D73"
                    onPress={() => navigation.navigate("ProfileEdit")}
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