import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
  <View style={stl.topo}>
    <Text style={stl.txtTitulo}>Calculadora 1.0</Text>
  </View>
);

const stl = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  txtTitulo: {
    fontSize: 25,
    color: '#FFF',
  },
});
