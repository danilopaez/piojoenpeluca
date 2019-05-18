import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import pedirMorfi from '../methods/pedir';

export default class ItemProducto extends Component {
    constructor(){
        super();

        
    }

    pedir = ev => {
        ev.preventDefault();
        Meteor.call('pedirMorfi', {pedido:1}, e=>{
            if(e)
                return console.log(e)
            
            console.log('Pedido Realizado')
        })
    }


    render() {
        const p = this.props.prod
        return (
                <div className="col m4 s12" >
                    <div className="card">
                        <div className="card-image">
                            <img src={ p.url } />
                        <span className="card-title">
                            <i className="material-icons" onClick={this.pedir}>add_circle_outline</i>
                            <i className="material-icons" onClick={this.pedir}>remove_circle_outline</i>
                            { p.nombre }
                            </span>
                        </div> 
                    </div>
                    

                </div>

        );
    }
}
