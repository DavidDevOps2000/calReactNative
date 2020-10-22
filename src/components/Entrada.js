import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default props => (
  <View style={txtInput}>
    <Numero
      num={props.num1}
      atualizarValor={props.atualizarValor}
      nome="num1"
    />
    <Numero
      num={props.num2}
      atualizarValor={props.atualizarValor}
      nome="num2"
    />
  </View>
);

const stl = StyleSheet.create({
  txtInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const {txtInput} = stl;
