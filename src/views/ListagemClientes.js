import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
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
                    nome: 'Lola',
                    idade: 10,
                    status: 'Ativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Snoopy',
                    idade: 18,
                    status: 'Inativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Mel',
                    idade: 2,
                    status: 'Inativo',
                    cidade: 'Fortaleza',
                    estado: 'CE'
                },
                {
                    nome: 'Dory',
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
            <View>
                <StatusBar corFundo='red' />
                <Header titulo='Listagem de Clientes' />
                <FlatListClientes data={this.state.dadosUsuario} />
            </View>
        )
    }
}