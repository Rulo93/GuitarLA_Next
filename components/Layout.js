import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio Web de venta de guitarras"/>  
            
        </Head>
        <Header 
        guitarra={guitarra}
        />
      {children}
      <Footer />
    </div>
  )
}

layout.defaultProps = {
  guitarra: null
}

export default layout
