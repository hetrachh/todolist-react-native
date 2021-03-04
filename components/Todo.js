import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Todo = (props) => {
    return (
        <View style={[style.item, {margin: 8, padding: 8}]}>
            <Text>{props.item}</Text>
            <Button 
            title={'Delete'}
            color={'red'}
            onPress={() => props.delete(props.item)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})

export default Todo