import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const ToDoItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <Text style={styles.todoItem}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: '#ff4d6d',
        marginHorizontal: 15,
        marginTop: 10,
        height: 50,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default ToDoItem
