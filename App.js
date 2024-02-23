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
        { id: 1, name: 'Buy edge control', completed: false },
        { id: 2, name: 'Buy coffee', completed: false },
    ])

    const addToDo = (todo) => {
        if (todos.length === 0) {
            setToDos([{ id: 1, name: todo, completed: false }])
            return
        }

        const lastToDo = todos[todos.length - 1]
        setToDos((prevToDos) => [
            ...prevToDos,
            { id: lastToDo.id + 1, name: todo, completed: false },
        ])
    }

    return (
        <View style={styles.container}>
            <Header />
            <ToDoForm submitToDo={addToDo} />
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
