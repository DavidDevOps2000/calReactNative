import React, {Component} from 'react';
import {View} from 'react-native';

import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operacao: 'subtracao', resultado: ''}; //Jogando e criando as var aqui, ela ficarão acessiveis em todo o proj

    this.calcular = this.calcular.bind(this); //aqui preserva os paramentros internados da Func para que não sofre contexto lexico
    this.atualizarValor = this.atualizarValor.bind(this);
    this.atualizarOperacao = this.atualizarOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;

      case 'subtracao':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;

      default:
        resultado = 0;
    }

    this.setState({resultado: resultado.toString()});
  }

  atualizarOperacao(operacao) {
    this.setState({operacao});
  }

  atualizarValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;

    this.setState({obj});
  }
  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizarOperacao={this.atualizarOperacao}
          atualizarValor={this.atualizarValor}
        />
      </View>
    );
  }
}
export default Index;
