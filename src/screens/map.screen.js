import React, { useContext } from 'react';
import { StoresContext } from '../services/stores/store.context';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export const MapScreen = () => {
    const storesContext = useContext(StoresContext);
    console.log(storesContext.stores);
    return (
        <>
            <MapView style={styles.map}/>
        </>
    );
}
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})