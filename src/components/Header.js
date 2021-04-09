import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={estilo.viewPrincipal}>
                <Text style={estilo.textoMenu}>{this.props.titulo}</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewPrincipal: {
        backgroundColor: '#aaa',
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
    textoMenu: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})