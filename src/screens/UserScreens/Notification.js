import React from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import Logo from '../../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
        text: 'fdgjdsffdsgfdsfgsdfgsdfsgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',

    },
    {
        text: 'MAPA',

    },
    {
        text: 'AGENDA',

    },
    {
        text: 'FAQ',

    },
]

export default function Notification({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Image style={styles.image} source={Logo} resizeMode="contain" />
                                <Icon name={item.icon} size={30} color={'#F8E257'} />
                                <Text style={styles.textCard}>{item.text}</Text>
                            </View>
                        );
                    }}
                />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        height: "75%",
        right: 70,
        borderColor: '#FFC800',

    },
    card: {
        width: 400,
        height: 100,
        backgroundColor: '#FBFAAC',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFC800',
    },
    textCard: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 16,
        color: '#0C264F',
        right: 150,
        maxWidth: 250,
        textAlign: 'center',
    },

});