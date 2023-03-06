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
        name: 'EVENTO GEEK',
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
                                    <Icon name={'chevron-right'} size={30} color={'#093D73'} style={{paddingLeft: 10}} />
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
        width: 355,
        height: 74,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
      },
      textCard: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 18,
        color: '#093D73',
        maxWidth: 320,
        textAlign: 'center'
      },
    text:{
        fontFamily: 'WorkSans-Regular',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    }

});