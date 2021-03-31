import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyApp from './_app'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      {/* <main className={styles.main}>
        
      </main> */}
      <Footer/>
    </div>
  )
}
