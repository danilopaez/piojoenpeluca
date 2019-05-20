import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import GroundPedidos from '../api/ground-pedidos';

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
    
    const fechaPedido = new Date(pedido.createdAt).toLocaleTimeString("es-AR") ;
    return (
      <li key={pedido._id}>
        <a target="_blank">{pedido.pedido} - { fechaPedido }</a>
      </li>
    );
  }
}

export default ListarPedidosContainer = withTracker(() => {
  return {
    pedidos: GroundPedidos.find().fetch(),
  };
})(ListarPedidos);
