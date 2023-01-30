import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Contact(){
  return (
    
      <header className={styles.header}>
      <Link href="/">
        Home
      </Link>
      </header>
     
  )
}