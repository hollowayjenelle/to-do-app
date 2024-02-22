import React from "react";
import { StyleSheet,View, Text } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>My To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#c9184a',
        height: 80,
        paddingTop: 38
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
})

export default Header
