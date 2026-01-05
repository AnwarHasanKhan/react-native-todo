import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoList from '../component/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/reducer/todoSlice';

const Main = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const todos = useSelector(state => state.todos);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: '900', color: '#151515ff' }}>Your To Do</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput
              placeholder={'Add New Task'}
              value={task}
              onChangeText={setTask}
              style={{ borderBottomWidth: 1, width: '85%' }}
            ></TextInput>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                paddingTop: 10,
              }}
              onPress={() => {
                dispatch(addTodo(task));
                setTask('')
              }}
            >
              <Image
                source={require('../assests/more.png')}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TodoList />
          </View>
          <View style={{ marginTop: 15, gap: 5, paddingRight: 60 }}>
            <Text
              style={{
                fontStyle: 'italic',
                color: '#4f4f4fff',
                fontWeight: '600',
              }}
            >
              Your remaining todos: {todos.length}
            </Text>
            <Text
              style={{
                fontStyle: 'italic',
                color: '#8b8b8bff',
                fontWeight: '600',
              }}
            >
              "Doing what you love is the cornerstone of having abundance in
              your life."-Wayne Dyer
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
  },
});
