import Link from "next/link"
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>
          Multi-page website using Next.js
        </h2>

        <div className={styles.grid}>
          <Link href="/" >
            <span className={styles.card}>
            <h2>Home &rarr;</h2>
            </span>
          </Link>

          <Link href="/about" >
          <span className={styles.card}>
            <h2>About &rarr;</h2>
            </span>
          </Link>

          <Link
            href="/contact"
            
          >
            <span className={styles.card}>
            <h2>Contact &rarr;</h2>
            </span>
          </Link>

        </div>
      </main>
    </div>
  )
}
