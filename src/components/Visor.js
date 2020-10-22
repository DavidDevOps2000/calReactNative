import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default props => (
  <View>
    <TextInput
      style={style.visor}
      placeholder="Resultado"
      editable={false}
      value={props.resultado}
    />
  </View>
);

const style = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },
});
