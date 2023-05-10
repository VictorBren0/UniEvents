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

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#093D73' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#FFFFFF', paddingTop: 40 }}>
                <Image style={styles.image} source={Logo} resizeMode="contain" />
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
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093D73', justifyContent: 'center', borderRadius: 15, padding: 10 }}>
                        <Icon name={'logout'} size={22} color={'#093D73'} />
                        <Text style={{ color: '#093D73', fontFamily: 'WorkSans-Regular', fontSize: 15, paddingLeft: 10 }}>Sair da conta</Text>
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