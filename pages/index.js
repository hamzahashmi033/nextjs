import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from './Landingpage'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Universal Blogging</title>
        <meta name="description" content="Develop by Hamza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
     <LandingPage/>
     </div>
  )
}
