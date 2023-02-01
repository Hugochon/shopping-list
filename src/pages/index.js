import Link from "next/link"
import styles from '../styles/Home.module.css'
import Header from './header'
import { useState } from "react"

export default function Home() {
  
  const cards = [
    { href: '/', text: 'Home' },
    { href: '/add_liste_courses', text: 'Créer une nouvelle liste' },
    { href: '/see_lists', text: 'Voir ses listes' },
    { href: '/contact', text: 'Contact' },
  ]

  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <Link key={index} href={card.href}>
              <p 
                className={`${styles.card} ${hoveredCard === index+1 ? styles.hovered : ''}`}
                onMouseEnter={() => setHoveredCard(index)}              
              >
                {card.text} &rarr;
              </p>
            </Link>
          ))}
          <div className={styles.background} style={{"--index" : hoveredCard}}></div>
          <div className={styles.image} style={{"--index" : hoveredCard}}></div>
        </div>
        
      </main>
    </div>
  )
}
