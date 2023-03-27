import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (itemId) => {
        const selectedItem = props.items.find(item => item.id === itemId);
        setSelectedItem(selectedItem);
        toggleDropdown();

        if (props.onSelect) {
            props.onSelect(itemId);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.dropdownButton, props.disabled && styles.disabledButton]} onPress={toggleDropdown} disabled={props.disabled}>
                <Text style={styles.dropdownButtonText}>{selectedItem ? selectedItem.title : 'Selecione um item:'}{selectedItem ? selectedItem.floor : ''}</Text>
                <Icon name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'} size={30} color={'#093D73'} />
            </TouchableOpacity>
            {isOpen && (
                <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
                    {props.items.length > 0 ? (
                        props.items.map((item) => (
                            <TouchableOpacity key={item.id} onPress={() => handleSelect(item.id)}>
                                <View style={styles.drop}>
                                    <Text style={styles.text}>{item.title ? item.title : item.floor}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View style={styles.drop}>
                            <Text style={styles.text}>Nenhum item disponível</Text>
                        </View>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0E6E6',
        padding: 10,
        borderRadius: 5,
        width: 340,
        borderWidth: 2,
        borderColor: '#FFC72C'
    },
    dropdownButtonText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#093D73',
    },
    scrollView: {
        flexGrow: 1,
        maxHeight: 150,
        width: 340,
        backgroundColor: '#F0E6E6',
    },
    drop: {
        paddingTop: 20,
        borderBottomColor: '#111111',
        borderBottomWidth: 1,
        paddingLeft: 15,
    },
    text: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#093D73',
        bottom: 10
    },
    disabledButton: {
        opacity: 0.5,
    }
});

export default Dropdown;