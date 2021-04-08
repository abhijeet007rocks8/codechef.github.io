import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyApp from './_app'
import Footer from '../components/Footer/Footer'
import Events from '../components/Home/events-home';
import AboutHome from '../components/Home/about-us-home';
import styled from 'styled-components'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <main className={styles.main}> 
          <AboutHome/>
          <Events/> 
      </main>
      </div>
      {/* <Footer/> */}
    </>
  )
}

const TitImg =styled.img`
   width:70%;
`;
