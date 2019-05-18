import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Pedidos from '../api/pedidos';

class ListarPedidos extends Component {
  render() {
    const pedidos = this.props.pedidos.map(
      pedido => this.ItemPedido(pedido)
    );

    return (
      <div>
        <h2>Pedidos!</h2>
        <ul>{ pedidos }</ul>
      </div>
    );
  }

  ItemPedido(pedido) {
    return (
      <li key={pedido._id}>
        <a target="_blank">{pedido.pedido} - {pedido.createdAt}</a>
      </li>
    );
  }
}

export default ListarPedidosContainer = withTracker(() => {
  return {
    pedidos: Pedidos.find().fetch(),
  };
})(ListarPedidos);
