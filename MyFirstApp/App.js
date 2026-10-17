import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Салам, дүйнө!</Text>
      <Button title="Басыңыз" onPress={() => Alert.alert('Салам!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 24, marginBottom: 20 },
});