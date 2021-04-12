import React from 'react';
import { FlatList, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class FlatListClientes extends React.Component {

    constructor(props) {
        super(props)
    }

    componentesLista = ({ item }) => (
        <Card>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Cidade: {item.cidade}</Text>
            <Text>Estado: {item.estado}</Text>
        </Card>
    )

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.componentesLista}
            />
        )
    }
}