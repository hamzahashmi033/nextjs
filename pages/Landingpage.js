import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div>
       <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Universal Blogs!</a>
        </h1>

        <div className={styles.grid}>
          <a 
           className={styles.card}>
            <h2>Sports &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a 
           className={styles.card}>
            <h2>World News &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Events &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Travel Destinations &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    
  )
}

export default LandingPage
