import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({title, placeholder, ...rest}) => {
    return (
        <View>
            <Text style={styles.Text}>{title}</Text>
            <TextInputRN style={styles.input} placeholder= {placeholder} {...rest}/>
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "100",
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        paddingLeft: 10,
        paddingHorizontal:10,
    },
});
