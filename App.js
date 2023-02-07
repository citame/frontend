import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  Button} from 'react-native';
import { StoresContexProvider } from './src/services/stores/store.context';
import { MapScreen } from './src/screens/map.screen';
export default function App() {
  return (
    <StoresContexProvider>
      <View style={styles.container}>
        <Text>Hola2.0 2023</Text>
        <Button title='No me presiones'></Button>
        <MapScreen />
        <StatusBar style="auto" />
      </View>
    </StoresContexProvider> 
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