import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoList({todos, onToggle, onRemove}: Props) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem todo={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
