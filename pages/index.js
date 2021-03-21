import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/header'
import Team from './Team/team.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Navbar/> */}
        <Team />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
