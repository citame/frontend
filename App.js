import { StatusBar } from 'expo-status-bar';
import { StoresContexProvider } from './src/services/stores/store.context';
import { MapScreen } from './src/screens/map.screen';
import React from 'react';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.categoryButton}>
        <Image style={styles.categoryImage} source={{ uri: 'https://png.pngtree.com/png-clipart/20190613/original/pngtree-menu-icon-png-image_3565837.jpg' }} />
      </TouchableOpacity>

      <TextInput placeholder="🔍Buscar" style={styles.textInput} />


      <TouchableOpacity style={styles.profileButton}>
        <Image style={styles.profileImage} source={{ uri: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14046.jpg?w=740' }} />
      </TouchableOpacity>

      
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(137, 185, 226)',
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderWidth:'0.1rem',
    padding: 10,
    marginHorizontal: 10,
    borderRadius:30,
    fontFamily: 'Consolas',
  },
  profileButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow:'hidden',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonText: {
    color: 'rgb(19, 49, 92)',
    fontFamily: 'Consolas',
  },
};

export default App;
