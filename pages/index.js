import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyApp from './_app'
import Footer from '../components/Footer/Footer'
import Header from '../components/Home/header';
import Events from '../components/Home/events-home';
import AboutHome from '../components/Home/about-us-home';
import Upcoming from '../components/Home/upcoming-events';
import styled from 'styled-components'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <BackImg>
      <Back src="/imageasset/navbg.png"/>
    </BackImg>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/heading2.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <main className={styles.main}> 
          <Header/>
          <AboutHome/>
          <Events/> 
          <Upcoming/>
      </main>
      </div>
     <Footer/>
    </>
  )
}

const TitImg =styled.img`
   width:70%;
`;
const Back = styled.img`
    min-height:200px;
    width:100%;
    z-index:0;
`;
const BackImg = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
`;