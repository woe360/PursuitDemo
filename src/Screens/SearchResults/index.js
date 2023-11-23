import React from 'react';
import {View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

const data = [
  {
    id: '1',
    name: 'International Band Music 10',
    event: 'Concert',
    date: 'JUNE 36',
    location: '36 Guild Street London, UK',
    time: '4:00 PM - 9:00 PM',
    price: '25€',
  },
  {
    id: '2',
    name: 'International Band Music 10',
    event: 'Concert Frame 583',
    date: 'JUNE 36',
    location: '36 Guild Street London, UK',
    time: '4:00 PM - 9:00 PM',
    price: '25€',
  },
];

const SearchResults = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.event}</Text>
      <Text style={styles.description}>{`${item.date} - ${item.location} - ${item.time} - ${item.price}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => console.log(text)}
      />
      <Button title="Search" onPress={() => console.log('Search')} />
      <Button title="Events" onPress={() => console.log('Events')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SearchResults;
