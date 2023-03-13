import React, { useState, useImperativeHandle } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Inputs = React.forwardRef((props, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);
  const inputRef = React.createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));

  const inputStyle = {
    height: props.height || 50,
    fontSize: props.fontSize || 18,
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {props.iconName !== '' && (
          <Icon
            name={props.iconName}
            size={25}
            color={'#111111'}
            style={styles.icon}
          />
        )}
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          ref={inputRef}
          underlineColorAndroid="transparent"
          placeholderTextColor="#FFFFFF"
          style={[
            styles.input,
            { borderColor: error ? '#E91E63' : '#FFC72C' },
            inputStyle,
            props.inputStyle,
          ]}
          {...props}
          secureTextEntry={sec}
          multiline={true}
          maxLength={props.length}
          textAlignVertical="top"
        />
      </View>
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)}>
          <Icon
            name={sec ? 'eye' : 'eye-off'}
            size={26}
            color={error ? '#E91E63' : '#7b8794'}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F0E6E6',
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 8,
    color: '#111111',
    textAlignVertical: 'top',
  },
  icon: {
    marginRight: 10,
  },
  iconSecret: {
    marginLeft: 10,
    marginTop: 12,
  },
});

export default Inputs;
