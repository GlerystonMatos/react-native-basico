import React from 'react';
import Header from '../components/Header';
import { View, StyleSheet } from 'react-native';
import StatusBar from '../components/StatusBar';
import FlatListClientes from '../components/FlatListUsuarios';

export default class ListagemClientes extends React.Component {

    constructor() {
        super()

        this.state = {
            dadosUsuario: [
                {
                    nome: 'Gleryston Matos',
                    idade: 26,
                    status: 'Ativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Tobias Matos',
                    idade: 4,
                    status: 'Ativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Lola Matos',
                    idade: 10,
                    status: 'Ativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Snoopy Matos',
                    idade: 18,
                    status: 'Inativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Mel Matos',
                    idade: 2,
                    status: 'Inativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Dory Matos',
                    idade: 1,
                    status: 'Ativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                }
            ]
        }
    }

    render() {
        return (
            <View style={estilo.ViewPrincipal}>
                <StatusBar corFundo='red' />
                <Header titulo='Listagem de Clientes' />
                <FlatListClientes data={this.state.dadosUsuario} />
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    ViewPrincipal: {
        flex: 1
    }
})