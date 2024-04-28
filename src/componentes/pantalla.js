import React from "react";
import '../hojas-de-estilo/pantalla.css'

const Pantalla = ({ input }) => ( //Definimos con "const" los componentes que tienen una estructura simple
    <div className="input">
        { input }
    </div>
);

export default Pantalla;