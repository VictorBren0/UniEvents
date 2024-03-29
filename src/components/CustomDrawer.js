import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Logo from '../assets/image/Nassau.png';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#093D73' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#FFFFFF', paddingTop: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image style={styles.image} source={Logo} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: '#093D73', paddingTop: 40 }}>
                    <View style={{paddingHorizontal: 15}}>
                    <DrawerItemList {...props} />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 10, borderTopWidth: 1, backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093D73', justifyContent: 'center', borderRadius: 15, padding: 10 }}>
                        <Icon name={'share'} size={22} color={'#093D73'} />
                        <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 15, paddingLeft: 10, color: '#093D73' }}>Compartilhe o APP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    image: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        left: 60,
        bottom: 15
    },


});

export default CustomDrawer