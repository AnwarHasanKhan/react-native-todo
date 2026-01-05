import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../redux/reducer/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onToggleItem={id => dispatch(toggleTodo(id))}
          onRemoveItem={() => {
            dispatch(deleteTodo(item.id));
          }}
        />
      )}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );
};

export default TodoList;
