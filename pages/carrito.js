import {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'

const Carrito = ({carrito, actualizarCantidad, eliminarCarrito}) => {
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
      const calculoTotal = carrito.reduce ((total, producto) => total + (producto.cantidad * producto.precio), 0 )
        setTotal(calculoTotal);
    },[carrito]);
  return (
    <Layout pagina={'Carrito de Compras'}>
        <h1 className='heading'>Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>{carrito.length === 0 ? 'Carrito vacio' : (
                carrito.map(producto => (
                    <div key={producto.id} className={styles.producto}>                    
                        <div>
                            <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre}/>
                        </div>
                        <div>
                            <p className={styles.nombre}>{producto.nombre}</p>

                            <div className={styles.cantidad}>
                            <p>Cantidad:</p>
                            <select
                            value={producto.cantidad}
                            className={styles.select}
                            onChange={ (e) => actualizarCantidad({
                                cantidad: e.target.value,
                                id: producto.id
                            })
                            }>
                           
                           
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                                       
                            </select>

                            </div>

                            <p className={styles.precio}>$<span>{producto.precio}</span></p>
                            <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                        </div>

                        <button
                        type='button'
                        className={styles.eliminar}
                        onClick={() => eliminarCarrito(producto.id)}
                        >X</button>

                    </div>
                )
                 
                ))}</div>
            <div className={styles.resumen}>
                
                {total > 0 ? (
                    <>
                   <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: ${total}</p>
                    </>
                ) : <p>No hay productos en el carrito</p>}
            </div>
        </main>      
    </Layout>
  )
}

export default Carrito