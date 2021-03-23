import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Team from './Team/team.jsx'
import Events from './Events/Events'
import Articles from './Articles/Articles'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Navbar/> */}
        < Articles/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
