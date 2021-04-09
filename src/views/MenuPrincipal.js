import React from 'react';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MenuPrincipal extends React.Component {

    render() {
        return (
            <View>
                <StatusBar corFundo='blue' />
                <Header titulo='Menu Principal' />

                <Text>Hello Word</Text>
                <Text>Gleryston Matos</Text>

                <Button title='Navegar para outra tela' onPress={() => Actions.listagemClientes()} />
            </View>
        )
    }
}