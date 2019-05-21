import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import pedirMorfi from '../../methods/pedir';
import GroundPedido from '../../api/ground-pedido';

export default class ItemProducto extends Component {
    constructor(){
        super();

        
    }

    remProd = prod =>{
        GroundPedido.remove({ prod })
    }

    addOrRem = (inc, ev) => {
        ev.preventDefault();
        
        const prod = this.props.prod.nombre
        
        const prodGroud = GroundPedido.findOne({prod});
        
        if(!prodGroud && inc==-1)
            return;

        if (prodGroud && prodGroud.cantidad <= 1 && inc == -1)
            return this.remProd( prod );
        
        GroundPedido.update({ prod }, { $inc : { cantidad : inc }}, { upsert: 1});
        
    
    }




    render() {
        const p = this.props.prod
        return (
                <div className="col m4 s12" >
                    <div className="card">
                        <div className="card-image">
                            <img src={ p.url } />
                        <span className="card-title">
                            <i className="material-icons" onClick={ ev => this.addOrRem(1, ev) }>add_circle_outline</i>
                            <i className="material-icons" onClick={ ev => this.addOrRem(-1, ev) }>remove_circle_outline</i>
                            <i className="material-icons" onClick={ ev => this.remProd( p.nombre)}>delete</i>
                            { p.nombre }
                            </span>
                        </div> 
                    </div>
                    

                </div>

        );
    }
}
