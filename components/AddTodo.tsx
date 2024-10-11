import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function AddTodo() {
  return <View style={styles.wrapper} />;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    backgroundColor: 'red',
  },
});
