import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
   
   <Layout
   pagina= 'Nosotros'
   >
    <main className='contenedor'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
       
        <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus magna, mollis vel fringilla non, mattis nec dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas suscipit nulla erat, at faucibus enim commodo non. Etiam condimentum, odio eu ultricies aliquet, ipsum urna cursus risus, et sagittis est sem ut tellus. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus magna, mollis vel fringilla non, mattis nec dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas suscipit nulla erat, at faucibus enim commodo non. Etiam condimentum, odio eu ultricies aliquet, ipsum urna cursus risus, et sagittis est sem ut tellus. </p>
        </div>

      </div>
    </main>
      
      
   </Layout>

      
  )
}

export default Nosotros
