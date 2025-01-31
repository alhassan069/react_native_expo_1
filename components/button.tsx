import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// export interface Props {
//     title: string;
//     onPress: 
// }   

const MyButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "orange",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10
    },
    text: { fontSize: 16, color: "white", fontWeight: 700 }
})

export default MyButton