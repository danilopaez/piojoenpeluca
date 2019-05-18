import Pedidos from '../api/pedidos'

Meteor.methods({
    pedirMorfi(pedido) {
        // check(seccion, {
        //     key: String,
        //     titleLink: Match.Maybe(String),
        //     title: Match.Maybe(String),
        //     body: Match.Maybe(String),
        //     bodyInvisible: Match.Maybe(String),
        // });

        Pedidos.insert(pedido)
    }
})
