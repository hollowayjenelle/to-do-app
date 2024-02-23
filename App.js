import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'

export default function App() {
    //Add to-dos state here
    const [todos, setToDos] = useState([
        { name: 'Buy edge control', id: 1 },
        { name: 'Buy coffee', id: 2 },
    ])

    return (
        <View style={styles.container}>
            <Header />
            <ToDoForm />
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text style={styles.todoItem}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
