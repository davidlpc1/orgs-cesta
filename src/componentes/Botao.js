import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function botao({ estiloBotao, children, funcao}){
    return <>
        <TouchableOpacity style={[estiloBotao, style.botao]} onPress={funcao}>
            {children}
        </TouchableOpacity>
    </>
}

const style = StyleSheet.create({
    botao:{
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    }
})