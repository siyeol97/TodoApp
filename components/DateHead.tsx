import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  today: Date;
}

export default function DateHead({today}: Props) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.wrapper}>
        <Text style={styles.dataText}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  wrapper: {
    padding: 10,
    backgroundColor: '#26a69a',
  },
  dataText: {
    fontSize: 24,
    color: 'white',
  },
});
