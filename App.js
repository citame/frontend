import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  Button} from 'react-native';
import { storesRequest } from './src/services/stores/store.context';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola2.0 2023</Text>
      <Button title='No me presiones'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});