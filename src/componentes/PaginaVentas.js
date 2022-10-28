import { useState } from "react";
import styled from "styled-components";

import { ventas } from "../Ventas";
import DescargarVentas from "./DescargarVentas";
import MostrarVentas from "./MostrarVentas";
import SeleccionarVenta from "./SeleccionarVenta";

// Definir estilos para los componentes
const Principal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: grid;
  padding: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5fr 5fr;
  grid-template-areas:
    "BarraTareas BarraTareas"
    "Seleccionar MostrarProductos"
    "Descargar MostrarProductos";
`;

const BarraTareas = styled.div`
  grid-area: BarraTareas;
  background-color: pink;
`;

const SeleccionVentasContenedor = styled.div`
  grid-area: Seleccionar;
  width: 100%;
  height: 100%;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const MostrarVentasContenedor = styled.div`
  grid-area: MostrarProductos;
  background-color: pink;
  display: flex;
  justify-content: center;
`;

const DescargarContenedor = styled.div`
  grid-area: Descargar;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

// Componente de la pagina
function PaginaVentas() {
  // Hook para definir los productos seleccionados con el id
  const [productoID, setProductoID] = useState(undefined);

  const modificarProductoID = (valorID) => {
    setProductoID(valorID);
  };

  //   Hook para definer los productos seleccionados con el nombre del vendedor
  const [vendedor, setVendedor] = useState(undefined);

  const modificarVendedor = (nombre) => {
    setVendedor(nombre);
  };

  //   Hook para definir los productos seleccionados con la fecha
  const [fecha, setFecha] = useState(undefined);

  const modificarFecha = (valorFecha) => {
    setFecha(valorFecha);
  };

  return (
    <Principal>
      <BarraTareas>Barra de Tareas</BarraTareas>
      <SeleccionVentasContenedor>
        <SeleccionarVenta
          ventas={ventas}
          campo={"producto_id"}
          modificarTabla={modificarProductoID}
        />
        <SeleccionarVenta
          ventas={ventas}
          campo={"distribuidor"}
          modificarTabla={modificarVendedor}
        />
        <SeleccionarVenta
          ventas={ventas}
          campo={"fecha"}
          modificarTabla={modificarFecha}
        />
      </SeleccionVentasContenedor>
      <MostrarVentasContenedor>
        <MostrarVentas
          ventas={ventas}
          productoID={productoID}
          vendedor={vendedor}
          fecha={fecha}
        />
      </MostrarVentasContenedor>
      <DescargarContenedor>
        <DescargarVentas />
      </DescargarContenedor>
    </Principal>
  );
}

export default PaginaVentas;
