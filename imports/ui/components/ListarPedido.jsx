import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import GroundPedido from '../../api/ground-pedido';


class ListarPedido extends Component {
  
  vaciarPedido = () => {
    GroundPedido.remove({});
  }
  

  pedir = ev => {
    ev.preventDefault();
    const productos = GroundPedido.find().fetch();
    const tel = Session.get('tel') || '';
    const pedido = {
      tel,
      productos,

    }

  

    Meteor.call('pedirMorfi', pedido, e => {
      if (e)
        return console.log(e)

      this.vaciarPedido();
      
      
    })
  }

  guardarTelefono = ev =>{
    if(ev.target.value.length == 10){
      Session.set('tel', ev.target.value);
      Session.set('showBtnPedir', true);
    }
    
  }

  editarTelefono = ev =>{
    Session.set('showBtnPedir', false);
  }

  render() {
    if(GroundPedido.find().count() < 1)
      return null;

    const pedido = this.props.pedido.map(
      pedido => this.ItemPedido(pedido)
    );

    return (
      <div className="container mi-pedido">
        
        <h2>Mi Pedido!</h2>
        <ul>{ pedido }</ul>
        
        { this.props.showBtnPedir ? 
        <React.Fragment>
        
        <span>
              <i 
                className="material-icons"
                onClick={ this.editarTelefono }
              >edit</i>
              { Session.get('tel') }
          </span>
        <button 
          className="btn waves-effect waves-light btn-pedir"
          onClick={ this.pedir }
        >Hacé Comer Chinverguencha!
        </button>
        </React.Fragment>
          : 
          < input 
          type ="number" name="tel" id="tel" placeholder="Ingresa tu Telefono"
          onChange={this.guardarTelefono}
         />
        }
      </div>
    );
  }

  ItemPedido(pedido) {
    
    //const fechaPedido = new Date(pedido.createdAt).toLocaleTimeString("es-AR") ;
    const nombreProd = pedido.cantidad == 1 ? pedido.prod.slice(0, -1) : pedido.prod;
   
    return (
      <li key={pedido._id}>
        <a target="_blank">{pedido.cantidad } - { nombreProd }</a>
      </li>
    );
  }
}

export default ListarPedidoContainer = withTracker(() => {
  return {
    pedido: GroundPedido.find().fetch(),
    showBtnPedir: Session.get('showBtnPedir') || false,
  };
})(ListarPedido);
