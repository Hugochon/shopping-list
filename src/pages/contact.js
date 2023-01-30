import React from "react";
import styles from '../styles/contact.module.css'
import Header from './header'

export default function Contact(){
    return(
        <div className={styles.container}>
            <Header />
            <h2 className={styles.title}>Contact Page</h2>
            <div className={styles.details}>
                <li className={styles.list}>
                <label className={styles.label}>Name:</label>
                <p className={styles.value}>Schneegans Hugo</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}>Email:</label>
                <p className={styles.value}>hugo.schneegans@gmail.com</p>
                </li>
            </div>
        </div>
    )
}