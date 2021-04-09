import * as React from "react";
import { View, Text } from "react-native";
import StatusBar from './src/components/StatusBar';
import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <StatusBar corFundo='blue' />
      <Header titulo='Menu Principal' />
      <Text>Hello Word</Text>
      <Text>Gleryston Matos</Text>
    </View>
  );
}