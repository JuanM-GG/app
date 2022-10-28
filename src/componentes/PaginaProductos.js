// importar librerias
import { useState } from "react";
import styled from "styled-components";
// importar componentes
import DescargarDatos from "./DescargarDatos";
import MostrarProductos from "./MostrarProductos";
import SeleccionarProducto from "./SeleccionarProducto";

// generar base de datos de productos
var productosInventario = [
  { nombre: "Todos" },
  { productoID: 0, nombre: "Bolsa de Hielo 5kg", cantidad: 50, precio: 100.0 },
  { productoID: 1, nombre: "Bolsa de Hielo 3kg", cantidad: 100, precio: 20 },
  { productoID: 2, nombre: "Bolsa de Hielo 2kg", cantidad: 150, precio: 30 },
  { productoID: 3, nombre: "Costal 15kg", cantidad: 20, precio: 40 },
  { productoID: 4, nombre: "Costal 35kg", cantidad: 30, precio: 40 },
  { productoID: 5, nombre: "Barra de Hielo 50kg", cantidad: 10, precio: 50 },
  { productoID: 6, nombre: "Barra de Hielo 75kg", cantidad: 80, precio: 60 },
  { productoID: 7, nombre: "Costal Gourmet 15kg", cantidad: 25, precio: 70 },
  { productoID: 8, nombre: "Bolsa Gourmet 5kg", cantidad: 200, precio: 80 },
];

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

const SeleccionProductoContenedor = styled.div`
  grid-area: Seleccionar;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: blueviolet;
`;

const MostrarProductosContenedor = styled.div`
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

// componente App
function PaginaProductos() {
  // Hook para guardar el producto seleccionado
  const [productoSeleccionado, setProductoSeleccionado] = useState(
    productosInventario[0] // seleccionar todos por default
  );

  // funcion para seleccionar producto
  const seleccionarProducto = (productoNombre) => {
    const producto = productosInventario.filter(
      (producto) => producto.nombre === productoNombre
    );
    // usamos [0] porque filter regresa un arreglo
    setProductoSeleccionado(producto[0]);
  };
  // regresar elemento JSX
  return (
    <Principal>
      <BarraTareas>Barra de Tareas</BarraTareas>
      {/* componente para seleccionar producto*/}
      <SeleccionProductoContenedor>
        <SeleccionarProducto
          productosInventario={productosInventario}
          seleccionarProducto={seleccionarProducto}
        />
      </SeleccionProductoContenedor>
      {/* componente para mostrar producto */}
      <MostrarProductosContenedor>
        <MostrarProductos
          productosInventario={productosInventario}
          productoSeleccionado={productoSeleccionado}
        />
      </MostrarProductosContenedor>
      {/* componente para descargar producto */}
      <DescargarContenedor>
        <DescargarDatos />
      </DescargarContenedor>
    </Principal>
  );
}

export default PaginaProductos;
