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
import Logo from '../../../assets/image/Nassau.png';
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

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name={'menu'} size={40} color={'#FFFFFF'} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Agenda</Text>
            </View>

            <Image style={styles.image} source={Logo} resizeMode="contain" />

            <View style={styles.contentTitle}>
                <Text style={styles.textTitle}>
                Selecione o evento desejado
                </Text>
            </View>
            <ScrollView>
                {category.map((cat) => (
                    <View key={cat.id}>
                        <TouchableOpacity onPress={() => handleSubCategory(cat.id)} style={styles.card}>
                            <Icon name={categorySelect === cat.id ? 'expand-more' : 'chevron-right'} size={35} color={'#093D73'}
                                style={{ marginLeft: 10 }} />
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
                                    <Icon name="local-activity" size={25} color={itemSelect === event.title ? '#F8E257' : '#111'} />
                                    <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 24, color: itemSelect === event.title ? '#F8E257' : '#111111', paddingLeft: 10 }}>- {event.title}</Text>
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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0C488B',
        flexDirection: 'row',
    },
    textHeader: {
        fontSize: 25,
        fontFamily: 'WorkSans-Bold',
        color: '#FFFFFF',
        marginRight: 90
    },
    image: {
        height: "12%"
    },
    contentTitle: {
        width: '70%',
        height: '7%',
        borderRadius: 15,
        backgroundColor: '#0C488B',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        elevation: 5
    },
    textTitle: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    card: {
        width: 355,
        height: 70,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#093D73',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 20
    },
    textCard: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 20,
        color: '#093D73',
        maxWidth: 320,
        textAlign: 'center',
        marginLeft: 10
    },
    text: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 20,
        color: '#093D73',
        textAlign: 'center'
    },
});