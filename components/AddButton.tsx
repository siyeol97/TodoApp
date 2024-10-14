import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function AddButton() {
  return (
    <View style={styles.button}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});
