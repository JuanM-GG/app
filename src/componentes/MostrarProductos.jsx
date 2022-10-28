import React from "react";

function MostrarProductos({ productoSeleccionado, productosInventario }) {
  if (productoSeleccionado.nombre === "Todos") {
    const tablaProductos = productosInventario.map((producto) => (
      <tr>
        <td>{producto.nombre}</td>
        <td>{producto.productoID}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
      </tr>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>id</td>
              <td>Cantidad</td>
              <td>Precio</td>
            </tr>
          </thead>
          <tbody>{tablaProductos}</tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <p>Producto Nombre: {productoSeleccionado.nombre}</p>
      <p>Producto id: {productoSeleccionado.productoID}</p>
      <p>Producto Cantidad: {productoSeleccionado.cantidad}</p>
      <p>Producto Precio: {productoSeleccionado.precio}</p>
    </div>
  );
}

export default MostrarProductos;
