import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/image/LOGO.png';
import { getCategorys } from '../../../services/api';


export default function Schedule({ navigation }) {

    const [itemSelect, setItemSelect] = useState(null);
    const [category, setCategory] = useState([]);
    const [categorySelect, setCategorySelect] = useState(null);

    const getCategory = async () => {
        const response = await getCategorys();
        setCategory(response.data);
    };

    useEffect(() => {
        getCategory();
    }, []);

    const handleSubCategory = (id) => {
        if (categorySelect === id) {
            setCategorySelect(null);
        } else {
            setCategorySelect(id);
        }
        setItemSelect(null);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingBottom: 50 }} />
            <Image style={styles.image} source={Logo} resizeMode="contain" />
            <View style={{ paddingTop: 20 }} />
            <Text style={styles.text}>Selecione o evento desejado:</Text>
            <View style={{ paddingTop: 30 }} />
            <ScrollView>
                {category.map((cat) => (
                    <View key={cat.id}>
                        <TouchableOpacity onPress={() => handleSubCategory(cat.id)} style={styles.card}>
                            <Icon name={categorySelect === cat.id ? 'expand-more' : 'chevron-right'} size={35} color={'#093D73'} />
                            <Text style={styles.textCard}>{cat.title}</Text>
                        </TouchableOpacity>
                        {categorySelect === cat.id &&
                            cat.events &&
                            cat.events.map((event) => (
                                <TouchableOpacity
                                    key={event.id}
                                    onPress={() => {
                                        setItemSelect(event.title);
                                        navigation.navigate('EventInfo', { data: event });
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}
                                >
                                    <Icon name="drag-indicator" size={25} color={itemSelect === event.title ? '#F8E257' : '#FFFFFF'} />
                                    <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 20, color: itemSelect === event.title ? '#F8E257' : '#FFFFFF', paddingLeft: 10 }}>{event.title}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#093D73',
        alignItems: 'center',
    },
    image: {
        height: "15%"
    },
    card: {
        width: 355,
        height: 74,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 20
    },
    textCard: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 20,
        color: '#093D73',
        maxWidth: 320,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    },
});