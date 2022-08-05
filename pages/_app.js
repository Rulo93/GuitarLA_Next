import {useState, useEffect} from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLS);
  }
  , []);

  useEffect(() => {
   localStorage.setItem("carrito",JSON.stringify(carrito));

  }, [carrito]);

  const agregarCarrito = (producto) => {
    if (carrito.some( articulo => articulo.id === producto.id )) {
      const carritoActulizado = carrito.map( articulo => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActulizado);
    } else {
      console.log('Nuevo Prodcuto')
    }


    setCarrito([...carrito, producto]);
  }

   const actualizarCantidad = (producto) => {
    const carritoActulizado = carrito.map( articulo => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActulizado);
   }

  const eliminarCarrito = (id) => {
     const carritoActulizado = carrito.filter( articulo => articulo.id !== id);
      setCarrito(carritoActulizado);
  }


  return <Component {...pageProps} 
  carrito={carrito} 
  agregarCarrito={agregarCarrito} 
  actualizarCantidad={actualizarCantidad}
  eliminarCarrito={eliminarCarrito}
  />
}

export default MyApp
