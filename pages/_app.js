import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/Style2.css'

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  <Head>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

  
</Head>
  return <Component {...pageProps} />

}

export default MyApp
