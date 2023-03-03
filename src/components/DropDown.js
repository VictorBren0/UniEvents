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
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                <Text style={styles.dropdownButtonText}>{selectedItem ? selectedItem.title : 'Selecione um item:'}</Text>
                <Icon name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'} size={30} color={'#FFFFFF'} />
            </TouchableOpacity>
            {isOpen && (
                <ScrollView style={styles.scrollView}>
                    {props.items.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => handleSelect(item.id)}>
                            <View style={styles.drop}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>           
                    ))}
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
        backgroundColor: '#515151',
        padding: 10,
        borderRadius: 5,
        width: 340,
        borderWidth: 2,
        borderColor: '#EFD741'
    },
    dropdownButtonText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#FFFFFF',
    },
    scrollView: {
        maxHeight: 150,
        width: 300,
        backgroundColor: '#FFFFFF',
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
        color: '#111111',
        bottom: 10
    },
});

export default Dropdown;