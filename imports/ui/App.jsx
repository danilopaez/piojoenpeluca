import React from 'react';
import ListadoProductos from "./components/ListadoProductos";
import ListarPedidos from "./components/ListarPedidos";
import ListarPedido from "./components/ListarPedido";


const App = () => (
  <React.Fragment>
    

    <h6>More Hungry that...</h6>
    <h1><img id="logo" src="/img/logo.png" />Piojo en Peluca</h1>
    <ListadoProductos />  
    <ListarPedido />  
    <ListarPedidos />  

    </React.Fragment>

);

export default App;
