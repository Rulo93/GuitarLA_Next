import styles from '../styles/NoEncontrado.module.css'
import Link from 'next/link'

const NoEncontrado = () => {
  return (
    
    <div className={styles.no_encontrado}>   
      <h1 className='heading'>Pagina no encontrada</h1>
      <Link href='/'>Volver a Inicio</Link>
    </div>
    
  )
}

export default NoEncontrado
