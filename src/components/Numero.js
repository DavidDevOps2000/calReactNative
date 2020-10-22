import React from 'react';
import {TextInput} from 'react-native';

export default props => (
  <TextInput
    style={numero}
    value={props.num}
    onChangeText={valorDoCampo =>
      props.atualizarValor(props.nome, valorDoCampo)
    }
  />
);

const stl = {
  numero: {
    width: 140,
    height: 80,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },
};

const {numero} = stl;
