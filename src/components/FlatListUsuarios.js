import React from 'react'
import { View, FlatList, Text } from 'react-native'

export default class FlatListClientes extends React.Component {

    constructor(props) {
        super(props)
    }

    componentesLista = ({ item }) => (
        <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Cidade: {item.cidade}</Text>
            <Text>Estado: {item.estado}</Text>
        </View>
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