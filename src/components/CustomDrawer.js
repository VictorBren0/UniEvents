import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Logo from '../assets/image/LOGO.png';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#6A8FA8' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#093D73', paddingTop: 40 }}>
                <Image style={styles.image} source={Logo} resizeMode="contain" />
                <View style={{ flex: 1, backgroundColor: '#6A8FA8', paddingTop: 40 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#FFFFFF' }}>
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'share'} size={22} color={'#FFFFFF'} />
                        <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 15, paddingLeft: 10 }}>Compartilhe o APP</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'logout'} size={22} color={'#EA0B41'} />
                        <Text style={{color: '#EA0B41', fontFamily: 'WorkSans-Regular', fontSize: 15, paddingLeft: 10 }}>Sair da conta</Text>
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