import React, {useEffect, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import TodoList from './components/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(): React.JSX.Element {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'react native 기초 공부', done: false},
    {id: 3, text: 'todo list 만들어보기', done: false},
  ]);

  const onInsert = (text: string) => {
    // 새로 등록할 항목의 id 구하기
    // 등록된 항목 중 가장 큰 id를 구하고, 1을 더함
    // 리스트가 비어있다면 id = 1
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos([...todos, todo]);
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  // 앱 가동 시 todos 불러오기
  useEffect(() => {
    const load = async () => {
      try {
        const rawTodos = await AsyncStorage.getItem('todos');
        if (!rawTodos) {
          setTodos([]);
          return;
        }
        const savedTodos = JSON.parse(rawTodos);
        setTodos(savedTodos);
      } catch (error) {
        console.log(error);
      }
    };

    load();
  }, []);

  // todo가 바뀔 때 마다 저장
  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.log(error);
      }
    };

    save();
  }, [todos]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.wrapper}>
        {/* ios - 키보드 영역에 맞춰 화면 위로 올림 */}
        <KeyboardAvoidingView
          style={styles.avoid}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <DateHead today={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
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
