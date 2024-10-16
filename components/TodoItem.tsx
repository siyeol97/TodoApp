import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Todo} from '../types';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({todo, onToggle, onRemove}: Props) {
  const {id, text, done} = todo;

  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true, // Android에서 alert 바깥 영역 터치 시 닫힘, ios X
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)} activeOpacity={0.7}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      <TouchableOpacity onPress={remove} activeOpacity={0.3}>
        <Icon name="delete" size={32} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});
