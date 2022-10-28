import React from "react";
// Lista de productos

function SeleccionarProducto({ productosInventario, seleccionarProducto }) {
  const cambiarProducto = (e) => {
    seleccionarProducto(e.target.value);
  };

  return (
    <select onChange={(e) => cambiarProducto(e)}>
      {productosInventario.map((producto) => (
        <option key={producto.productoID} id={producto.productoID}>
          {producto.nombre}
        </option>
      ))}
    </select>
  );
}

export default SeleccionarProducto;
