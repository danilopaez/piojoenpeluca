import React, { Component } from 'react';
import ItemProducto from './ItemProducto';
import { withTracker } from 'meteor/react-meteor-data';
import GroundProductos from '../../api/ground-productos';

foo = new Ground.Collection('test');


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
    productos: GroundProductos.find().fetch(),
  };
})(ListadoProductos);
