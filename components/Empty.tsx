import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Empty() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.description}>할 일이 없습니다잉~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
