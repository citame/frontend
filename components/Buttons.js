import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function BlackButtons (){
    return(
        <TouchableOpacity>
            <Text>Black Button</Text>
        </TouchableOpacity>

    );
    
    
};

const styles = StyleSheet.create({
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
        borderColor: 'gray',
        padding: 10,
        marginHorizontal: 10,
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
      categoryButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      categoryButtonText: {
        color: 'white',
      },
})