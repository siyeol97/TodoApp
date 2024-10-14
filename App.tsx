import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import TodoList from './components/TodoList';

export default function App(): React.JSX.Element {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'react native 기초 공부', done: false},
    {id: 3, text: 'todo list 만들어보기', done: false},
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.wrapper}>
        <KeyboardAvoidingView
          style={styles.avoid}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <DateHead today={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});
