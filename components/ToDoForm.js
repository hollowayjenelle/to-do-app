import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const ToDoForm = ({ submitToDo }) => {
    const [toDoInput, setToDoInput] = useState('')
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Enter an item:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="eg: Buy pens"
                    style={styles.inputField}
                    onChangeText={(val) => setToDoInput(val)}
                />
                <Button
                    title="Add Item"
                    color="#c9184a"
                    onPress={submitToDo(toDoInput)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    formTitle: {
        fontSize: 22,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    inputField: {
        borderWidth: 2,
        borderColor: '#c9184a',
        borderRadius: 5,
        width: 200,
        padding: 5,
        marginRight: 5,
    },
})

export default ToDoForm
