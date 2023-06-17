import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateTime = ({ select, onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setTimePickerVisibility(false);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    const newDate = date.toLocaleDateString('pt-BR');
    setSelectedDate(newDate);
    onChange(newDate);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    const newTime = time.toLocaleTimeString().slice(0, 5);
    setSelectedTime(newTime);
    onChange(newTime);
  };

  const handlePress = () => {
    setDatePickerVisibility(!isDatePickerVisible);
    setTimePickerVisibility(!isTimePickerVisible);
  };

  return (
    <View>
      {select === 'date' && (
        <TouchableOpacity style={styles.box} onPress={handlePress}>
          <Text style={styles.boxText}>{selectedDate}</Text>
          <Icon name={'event'} size={30} color={'#093D73'} />
        </TouchableOpacity>
      )}
      {select === 'time' && (
        <TouchableOpacity style={styles.box} onPress={handlePress}>
          <Text style={styles.boxText}>{selectedTime}</Text>
          <Icon name={'schedule'} size={30} color={'#093D73'} />
        </TouchableOpacity>
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible && select === 'date'}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        locale="pt_BR"
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible && select === 'time'}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        locale="pt_BR"
        format="HH:mm"
      />
    </View>
  );
};
const styles = StyleSheet.create({

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        width: 330,
        borderWidth: 2,
        borderColor: '#000000'
    },
    boxText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: '#111111',
    },
});

export default DateTime;
