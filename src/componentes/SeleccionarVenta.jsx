import { useEffect, useState } from "react";
import styled from "styled-components";

// Estio para el contenedor de SeleccionarVenta
const SeleccionVentaContenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

function SeleccionarVenta({ ventas, campo, modificarTabla }) {
  const valores = ventas.map((venta) => venta[campo]);

  const valoresUnicos = [...new Set(valores)].sort();

  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (!check) {
      modificarTabla(undefined);
    }
  }, [check]);

  const onModificarTabla = (e) => {
    if (check) {
      modificarTabla(e.target.value);
    }
  };
  console.log(check);
  return (
    <SeleccionVentaContenedor>
      <input type="checkbox" onClick={() => setCheck(!check)} />
      <select onChange={(e) => onModificarTabla(e)}>
        {valoresUnicos.map((valor) => (
          <option>{valor}</option>
        ))}
      </select>
    </SeleccionVentaContenedor>
  );
}

export default SeleccionarVenta;
