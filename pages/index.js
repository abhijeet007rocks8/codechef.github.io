import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyApp from './_app'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codechef-VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MyApp/>
      </main>
    </div>
  )
}
