import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

const Example = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exampleData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then(res =>
        res.json(),
      ),
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Name: {item.name}</Text>
              <Text>Email ID: {item.email}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({});