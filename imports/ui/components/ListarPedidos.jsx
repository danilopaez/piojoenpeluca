import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import GroundPedidos from '../../api/ground-pedidos';

class ListarPedidos extends Component {
  render() {

    if(this.props.pedidos.length < 1)
      return(<div></div>);

    const pedidos = this.props.pedidos.map(
      pedido => this.ItemPedido(pedido)
    );

    

    return (
      <div className="container">
        <h2>Pedidos!</h2>
        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Telefono</th>
              <th>Pedido</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            { pedidos }
          </tbody>
        </table>
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
    
    const fechaPedido = new Date(pedido.createdAt).toLocaleTimeString("es-AR") || '' ;
    let pedidoProds =' ';
    pedido.productos.map(
      p=> {
        
        pedidoProds += p.cantidad + this.traerChar(p.prod) + ' ' 
      }
    )
    
    const icon = pedido.enServer ? 'done_all' :'access_time' ;
    return (
      <tr key={pedido._id}>
        <td><i className="material-icons">{icon}</i></td>
        <td>📞 {pedido.tel} </td>
        <td>{pedidoProds}</td>
        <td>{fechaPedido}</td>
      </tr>
    );
  }
}

export default ListarPedidosContainer = withTracker(() => {
  return {
    pedidos: GroundPedidos.find({},{ sort: {createdAt:-1}}).fetch(),
  };
})(ListarPedidos);
