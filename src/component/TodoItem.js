import { Image, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({ todo, onRemoveItem, onToggleItem }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
      }}
    >
      <TouchableOpacity
        style={{
          padding: 5,
          width: '90%',
          flexDirection: 'row',
          gap: 6,
          alignItems: 'center'
        }}
        onPress={() => onToggleItem(todo.id)}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            height: 22,
            width: 22,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {todo.completed && (
            <Image
              source={require('../assests/check.png')}
              style={{ height: 15, width: 15 }}
            />
          )}
        </View>
        <Text
          style={{
            paddingRight: 25,
            textDecorationLine: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5
        }}
        onPress={() => onRemoveItem(todo.id)}
      >
        <Image
          source={require('../assests/close.png')}
          style={{ height: 15, width: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
