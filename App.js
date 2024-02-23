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
import ToDoItem from './components/ToDoItem'

export default function App() {
    //Add to-dos state here
    const [todos, setToDos] = useState([
        { id: 1, name: 'Buy edge control', completed: false },
        { id: 2, name: 'Buy coffee', completed: false },
    ])

    const addToDo = (todo) => {
        setToDos((prevToDos) => [
            ...prevToDos,
            { id: todos.length + 1, name: todo, completed: false },
        ])
    }

    return (
        <View style={styles.container}>
            <Header />
            <ToDoForm submitToDo={addToDo} />
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id}
                renderItem={({ item }) => <ToDoItem item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
