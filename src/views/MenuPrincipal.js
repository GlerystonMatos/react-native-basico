import React from 'react';
import { Button } from 'native-base';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, Button as ButtonRn } from 'react-native';

export default class MenuPrincipal extends React.Component {

    constructor() {
        super()
        this.state = {
            mostrar: false,
            texto: 'OLHA EU AQUI'
        }
    }

    render() {
        return (
            <View style={estilo.viewPrincipal}>
                <StatusBar corFundo='blue' />
                <Header titulo='Menu Principal' />
                <View>
                    <Text style={estilo.textHelloWord}>Hello Word</Text>
                    <Text style={estilo.textName}>Gleryston Matos</Text>

                    <ButtonRn title='Navegar para outra tela' onPress={() => Actions.listagemClientes()} />

                    <Button full rounded onPress={() => Actions.listagemClientes()} danger style={estilo.btn}>
                        <Text style={estilo.textBtn}>Navegar para outra tela</Text>
                    </Button>

                    <Button full success onPress={() => this.setState({ mostrar: true })} style={estilo.btn}>
                        <Text>Mostrar</Text>
                    </Button>

                    <Button full warning onPress={() => this.setState({ mostrar: false })} style={estilo.btn}>
                        <Text>Ocultar</Text>
                    </Button>

                    <Text style={estilo.textOlhaEuAqui}>{
                        this.state.mostrar
                            ?
                            this.state.texto
                            :
                            null
                    }</Text>
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    textHelloWord: {
        marginTop: 10,
        marginLeft: 140
    },
    textOlhaEuAqui: {
        marginTop: 10,
        marginLeft: 130
    },
    textName: {
        marginBottom: 10,
        marginLeft: 125
    },
    btn: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
    }
})