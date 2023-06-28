import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PinScreen = () => {
    const keyArray = [
        { digit: 1, label: '' },
        { digit: 2, label: 'abc' },
        { digit: 3, label: 'def' },
        { digit: 4, label: 'ghi' },
        { digit: 5, label: 'jkl' },
        { digit: 6, label: 'mno' },
        { digit: 7, label: 'pqrs' },
        { digit: 8, label: 'tuv' },
        { digit: 9, label: 'wxyz' },
        { digit: '*', label: '' },
        { digit: 0, label: '+' },
        { digit: '#', label: '' },
      ]
  const [pin, setPin] = useState('');

  const handleKeyPress = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };

  const renderKey = (digit, label) => (
    <TouchableOpacity
      key={digit}
      style={styles.keypadButton}
      onPress={() => handleKeyPress(digit)}
    >
      <Text style={styles.keypadButtonText}>{digit}</Text>
      <Text style={styles.keypadLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pinContainer}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={[styles.pinDot, index < pin.length && styles.pinDotFilled]} />
        ))}
      </View>
      <View style={styles.keypadContainer}>
        {keyArray.map(({ digit, label }) => renderKey(digit, label))}
        <TouchableOpacity style={styles.keypadButton} onPress={handleDeletePress}>
          <Text style={styles.keypadButtonText}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.keypadButton}
          onPress={() => setPin('')} // Clear the pin
        >
          <Text style={styles.keypadButtonText}>CLR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pinDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
  },
  pinDotFilled: {
    backgroundColor: 'black',
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keypadButton: {
    width: '33.33%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  keypadButtonText: {
    fontSize: 24,
  },
  keypadLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default PinScreen;

