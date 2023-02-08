import { StatusBar } from 'expo-status-bar';
import { StoresContexProvider } from './src/services/stores/store.context';
import { MapScreen } from './src/screens/map.screen';
export default function App() {
  return (
    <StoresContexProvider>
      
        <MapScreen/>
        <StatusBar style="auto" />
      
    </StoresContexProvider> 
  );
}