import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from './_app'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Navbar/> */}
        {/* <Leaderboard/>
        <Team/>
         < Articles/>
        <Events/> */}
        <App/>
      </main>
{/* 
      <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
