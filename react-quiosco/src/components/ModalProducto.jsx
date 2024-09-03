import { useState, useEffect } from 'react';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

export default function ModalProducto() {
  const { producto, handleClickModal, handleAgregarPedido, pedido } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() =>{
    if(pedido.some(pedidoState => pedidoState.id === producto.id))
        {
            const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]
            setCantidad(productoEdicion.cantidad)
            setEdicion(true)
        }
  }, [pedido] )

  const handleCantidadChange = (type) => {
    if (type === 'decrease' && cantidad > 1) setCantidad(cantidad - 1);
    if (type === 'increase' && cantidad < 5) setCantidad(cantidad + 1);
  };

  return (
    <div className="md:flex items-center gap-10">
      <div className="md:w-1/3">
        <img src={`img/${producto.imagen}.jpg`} alt={`Imagen producto ${producto.nombre}`} />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal} aria-label="Cerrar Modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto.precio)}</p>

        <div className="flex gap-4 mt-5">
          <button type="button" onClick={() => handleCantidadChange('decrease')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button type="button" onClick={() => handleCantidadChange('increase')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => { handleAgregarPedido({ ...producto, cantidad })
            handleClickModal()
        }}
        >
          {edicion ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
}
