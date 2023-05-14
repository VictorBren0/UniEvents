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
import { useRoute } from '@react-navigation/native';


const CustomDrawerMap = (props) => {

  const [itemSelect, setItemSelect] = useState(null);
  const [category, setCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState(null);
  const [data, setData] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const getData = async () => {
    const response = await route.params?.data
    setData(response);
    navigation.navigate('Map', { data: data })
  }

  useEffect(() => {
    getData();
  }, [data, navigation]);

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
    <View style={{ flex: 1, backgroundColor: '#093D73' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#FFFFFF', paddingTop: 40 }}>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
        <View style={{ flex: 1, backgroundColor: '#093D73', paddingTop: 20 }}>
          {category.map((cat) => (
            <View key={cat.id}>
              <DrawerItem
                label={cat.title}
                onPress={() => handleSubCategory(cat.id)}
                style={{ marginLeft: 10 }}
                labelStyle={{ fontFamily: 'WorkSans-Bold', fontSize: 16, color: '#E0E0E0' }}
                icon={({ focused, color, size }) => (
                  <Icon
                    name={
                      categorySelect === cat.id ? 'expand-more' : 'chevron-right'
                    }
                    size={size}
                    color={'#E0E0E0'}
                  />
                )}
              />
              {categorySelect === cat.id &&
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
      <View style={{ padding: 20, borderTopWidth: 1, backgroundColor: '#FFFFFF' }}>
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => navigation.navigate("Drawer")}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#093D73', justifyContent: 'center', borderRadius: 15, padding: 5 }}>
            <Icon name={'keyboard-return'} size={25} color={'#093D73'} />
            <Text style={{ color: '#093D73', fontFamily: 'WorkSans-Bold', fontSize: 15, paddingLeft: 10 }}>Menu Principal</Text>
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