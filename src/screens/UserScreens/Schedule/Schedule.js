import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/image/LOGO.png';

const DATA = [
    {
        name: 'COSPLAY',
        page: 'AddCategory'
    },
    {
        name: 'COMPETIDOR',
        page: 'EditCategory'
    },
]



export default function Schedule({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingBottom: 50 }} />
            <Image style={styles.image} source={Logo} resizeMode="contain" />
            <View style={{ paddingTop: 20 }} />
            <Text style={styles.text}>Selecione o evento desejado:</Text>
            <View style={{ paddingTop: 30 }} />
            <FlatList
                data={DATA}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return (
                        <View style={{ paddingTop: 40 }}>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('EventInfo');
                                }}
                                style={styles.card}>
                                <Text style={styles.textCard}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#093D73',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: "15%"
    },
    card: {
        width: 285,
        height: 74,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E5887'
    },
    textCard: {
        fontFamily: 'Rubik-One',
        fontSize: 16,
        color: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20
    },
    text:{
        fontFamily: 'Rubik-One',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    }

});