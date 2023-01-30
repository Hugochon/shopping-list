import React from "react";
import styles from '../styles/see_lists.module.css'
import Header from './header'
import { useState } from "react"
import { getCollectionByUser } from "../scripts/interact_firebase";

export default function see_lists(){

    const [username, setUsername] = useState("");

    const [collection, setCollection] = useState([]);

    const [showInfo, setShowInfo] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setCollection([]);
        console.log('A name was submitted: ' + username);
        const collectionData = await getCollectionByUser(username);
        
        collectionData.forEach((doc) => {
            const listArray = Object.entries(doc.list);
            setCollection(prevCollection => [...prevCollection, listArray]);
        });
        setShowInfo(true) 
    }

    return(
        <div className={styles.container}>
            <Header />
            <h2 className={styles.title}>Qui êtes-vous ?</h2>
            <div className={styles.details}>
                <form className={styles.forms} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                    Username : 
                    <input className={styles.input} type="text" value={username} onChange={event => setUsername(event.target.value)} />
                    <button className={styles.submit} type="submit">Ajouter</button>
                    </label>
                </form>

                {showInfo && (
                    <div>
                    <h3 className={styles.title}>Liste(s) de courses de "{username}"</h3>
                    <div className={styles.details}>
                        {collection.map((list, index) => (
                        <React.Fragment key={index}>
                            <p className={styles.listNumber}>Liste numéro {index + 1}:</p>
                            <div className={styles.list}>
                            {list.map((item, idx) => (
                                <p className={styles.item} key={idx}>
                                {item[0]}: {item[1]}
                                </p>
                            ))}
                            </div>
                        </React.Fragment>
                        ))}
                    </div>
                    </div>
                    )}
            </div>
            <div className={styles.image}></div>
        </div>
        
    )
}