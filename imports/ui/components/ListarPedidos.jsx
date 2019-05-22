import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import GroundPedidos from '../../api/ground-pedidos';

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

  traerChar = prod => {
    switch (prod) {
      case 'Pizzas':
        return '🍕';
      case 'Lomos':
        return '🥪';
      case 'Empanadas':
        return '🥟';
      
        
    
      default:
        return prod;
    } 
  }

  ItemPedido(pedido) {
    
    const fechaPedido = new Date(pedido.createdAt).toLocaleTimeString("es-AR") ;
    let pedidoProds =' ';
    pedido.productos.map(
      p=> {
        
        pedidoProds += p.cantidad + this.traerChar(p.prod) + ' ' 
      }
    )
    
    const icon = pedido.enServer ? 'done_all' :'access_time' ;
    return (
      <li key={pedido._id}>
        <i className="material-icons">{icon}</i> 📞 {pedido.tel} 🚚: {pedidoProds}
      </li>
    );
  }
}

export default ListarPedidosContainer = withTracker(() => {
  return {
    pedidos: GroundPedidos.find().fetch(),
  };
})(ListarPedidos);
