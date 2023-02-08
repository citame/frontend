import React, { useContext, useState, useEffect } from 'react';
import { StoresContext } from '../services/stores/store.context';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`
export const MapScreen = () => {
    const storesContext = useContext(StoresContext);
   
    return (
        <>
            <Map />
        </>
    );
}
