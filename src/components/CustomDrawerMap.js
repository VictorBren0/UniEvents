import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Logo from '../assets/image/LOGO.png';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getCategorys } from '../services/api';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerMap = (props ) => {

    const [subCategory, setSubCategory] = useState(null);
    const [itemSelect, setItemSelect] = useState(null);
    const [itemCatSelect, setItemCatSelect] = useState(null);
    const [category, setCategory] = useState([]);
    const [apiAvailable, setApiAvailable] = useState(true);

    const navigation = useNavigation();

    const getCategory = async () => {
      try {
        const response = await getCategorys();
        setCategory(response.data);
        setSubCategory(response.data[0].events[0].id);
        setApiAvailable(true);
      } catch (error) {
        setApiAvailable(false); // atualiza a variável para indicar que a API está indisponível
      }
    };

    useEffect(() => {
        getCategory();
    }, []);


    const handleSubCategory = (id) => {
        if (subCategory === id) {
          setSubCategory(null);
        } else {
          setSubCategory(id);
        }
        setItemSelect(null);
        setItemCatSelect(
          itemCatSelect === category.find((cat) => cat.id === id).title
            ? null
            : category.find((cat) => cat.id === id).title
        );
      };
    
      return (
        <View style={{ flex: 1, backgroundColor: '#6A8FA8' }}>
          <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#093D73', paddingTop: 40 }}>
            <Image style={styles.image} source={Logo} resizeMode="contain" />
            <View style={{ flex: 1, backgroundColor: '#6A8FA8', paddingTop: 20 }}>
            {!apiAvailable && ( 
        <View>
          <Text style={styles.alertText}>Estamos indisponível no momento! Tente novamente mais tarde.</Text>
        </View>
      )}
              {category.map((cat) => (
                <View key={cat.id}>
                  <DrawerItem
                    label={cat.title}
                    onPress={() => handleSubCategory(cat.id)}
                    style={{ marginLeft: 10 }}
                    labelStyle={{ fontFamily: 'WorkSans-Regular', fontSize: 16, color: '#E0E0E0' }}
                    icon={({ focused, color, size }) => (
                      <Icon
                        name={
                          itemCatSelect === cat.title ? 'expand-more' : 'chevron-right'
                        }
                        size={size}
                        color={'#E0E0E0'}
                      />
                    )}
                  />
                  {subCategory === cat.id &&
                    cat.events &&
                    cat.events.map((event) => (
                      <DrawerItem
                        key={event.id}
                        label={event.title}
                        onPress={() => {
                            setItemSelect(event.title);
                            navigation.navigate('Map', { data: event.maps[0] });
                          }}
                        style={{ marginLeft: 20 }}
                        labelStyle={{
                          fontFamily: 'WorkSans-Regular',
                          fontSize: 15,
                          color: itemSelect === event.title ? '#F8E257' : '#A0A0A0',
                        }}
                        icon={({ focused, color, size }) => (
                          <Icon
                            name="drag-indicator"
                            size={size}
                            color={itemSelect === event.title ? '#F8E257' : '#A0A0A0'}
                          />
                        )}
                      />
                    ))}
                </View>
                    ))}
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#FFFFFF' }}>
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => navigation.navigate("Drawer")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'keyboard-return'} size={25} color={'#FFC72C'} />
                        <Text style={{color: '#FFC72C', fontFamily: 'WorkSans-Regular', fontSize: 15, paddingLeft: 10 }}>Menu Principal</Text>
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
  alertText: {
    fontSize: 20,
    fontFamily: 'WorkSans-Bold',
    color: 'red',
    textAlign: 'center',
    top: 30,
    width: 250,
  },
});

export default CustomDrawerMap