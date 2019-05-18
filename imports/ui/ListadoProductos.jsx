import React, { Component } from 'react';
import ItemProducto from './ItemProducto';
import { withTracker } from 'meteor/react-meteor-data';
import Productos from '../api/productos';


class ListadoProductos extends Component {
  render() {
    const productos = this.props.productos.map(
      p => <ItemProducto  key={ p._id } prod={p} />
    );

    return (
      <div className="">
        
        {productos}
      </div>
    );
  }

  
}


export default ListadoProductosContainer = withTracker(() => {
  return {
    productos: Productos.find().fetch(),
  };
})(ListadoProductos);
