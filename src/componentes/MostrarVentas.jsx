function MostrarVentas({ ventas, productoID, vendedor, fecha }) {
  const datos = ventas.filter(
    (venta) =>
      (productoID ? venta.producto_id === productoID : true) &&
      (vendedor ? venta.distribuidor === vendedor : true) &&
      (fecha ? venta.fecha === fecha : true)
  );

  //   console.log(fecha);
  //   console.log(vendedor);
  //   console.log(productoID);
  const tabla = datos.map((venta) => (
    <tr>
      <td>{venta.venta_id}</td>
      <td>{venta.distribuidor}</td>
      <td>{venta.producto_id}</td>
      <td>{venta.cliente_id}</td>
      <td>{venta.fecha}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Venta id</th>
            <th>Vendedor</th>
            <th>Producto id</th>
            <th>Cliente id</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>{tabla}</tbody>
      </table>
    </div>
  );
}

export default MostrarVentas;
// venta_id: "8602511",
// distribuidor: "Manuel",
// fecha: "07/06/2020",
// hora: "23",
// producto_id: "6",
// unidades: "21",
// venta: "849",
// cliente_id: "7",
