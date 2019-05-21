import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import GroundPedido from '../../api/ground-pedido';

class ListarPedido extends Component {
  render() {
    const pedido = this.props.pedido.map(
      pedido => this.ItemPedido(pedido)
    );

    return (
      <div>
        <h2>Mi Pedido!</h2>
        <ul>{ pedido }</ul>
      </div>
    );
  }

  ItemPedido(pedido) {
    
    //const fechaPedido = new Date(pedido.createdAt).toLocaleTimeString("es-AR") ;
    return (
      <li key={pedido._id}>
        <a target="_blank">{pedido.cantidad } - { pedido.prod }</a>
      </li>
    );
  }
}

export default ListarPedidoContainer = withTracker(() => {
  return {
    pedido: GroundPedido.find().fetch(),
  };
})(ListarPedido);
