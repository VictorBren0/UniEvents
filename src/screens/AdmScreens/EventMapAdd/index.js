import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';

import Dropdown from '../../../components/DropDown'
import CustomButton from '../../../components/CustomButton';
import ClickImage from '../../../components/ClickImage';
import { getCategorys, getMaps, postEventsMap } from '../../../services/api';

export default function EventMapAdd({ navigation }) {

    const [event, setEvent] = useState(null);
    const [category, setCategory] = useState(null);
    const [listMap, setListMap] = useState([]);
    const [selectedItemId1, setSelectedItemId1] = useState(null);
    const [selectedItemId2, setSelectedItemId2] = useState(null);
    const [selectedItemId3, setSelectedItemId3] = useState(null);
    const [selectedItemFile, setSelectedItemFile] = useState(null);
    const [lastPosition, setLastPosition] = useState(null);
    const [posy, setPosy] = useState(null);
    const [posx, setPosx] = useState(null);



    const getCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    const getMap = async () => {
        const response = await getMaps();
        setListMap(response.data);
    };

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        getMap();
    }, [])


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

    const handleSelectItem3 = (itemId) => {
        setSelectedItemId3(itemId);
        const selectedItem = listMap.find((map) => map.id === itemId);
        setSelectedItemFile(selectedItem ? selectedItem.file : null);
    }

    const handlePositionSelected = (position) => {
        setLastPosition(position);
        setPosy(position.y)
        setPosx(position.x)
    };

    const handleSave = async () => {
        if (!selectedItemId1) {
            alert('Selecione uma categoria');
            return;
        }
        if (!selectedItemId2) {
            alert('Selecione um evento');
            return;
        }
        if (!selectedItemId3) {
            alert('Selecione um mapa');
            return;
        }
        if (!lastPosition) {
            alert('Selecione um local');
            return;
        }
        try {
            await postEventsMap(selectedItemId3, selectedItemId2, posy, posx);
            alert('Evento adicionado com sucesso no mapa');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar o evento  no mapa');
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
                    <Text style={styles.text}>Selecione o Mapa:  </Text>
                </View>
                <Dropdown items={listMap} onSelect={handleSelectItem3} />
                <View style={styles.spaceText}>
                    <Text style={styles.text}>Clique no local para adicionar um evento:</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <ClickImage onPositionSelected={handlePositionSelected} selectedItem={selectedItemFile} />
                </View>
                <View style={{ paddingBottom: 80 }} />
                <CustomButton
                    text="Adicionar"
                    backgroundColor="#093D73"
                    textColor="#FFFFFF"
                    onPress={handleSave}
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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        fontFamily: 'WorkSans-Regular',
        fontSize: 16,
        color: '#093D73',
        left: 10
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