const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

// Incorrect Implementation (missing keyExtractor):
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.value}</Text>}
/>

// Correct Implementation (using unique 'id' as key):
<FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.value}</Text>}
/>