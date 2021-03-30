import Head from 'next/head'
import Form from '../src/components/Form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> + <a href="https://www.cypress.io">Cypress</a> + <a href="https://github.com/features/actions">GitHub Actions!</a>
        </h1>
        <Form />
      </main>
    </div>
  )
}
