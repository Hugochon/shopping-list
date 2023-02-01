import React, { useEffect } from "react";
import styles from '../styles/see_lists.module.css'
import Header from './header'
import { useState } from "react"
import { getCollectionByUser,deleteList } from "../scripts/interact_firebase";


export default function see_lists(){

    const [username, setUsername] = useState("");
    const [collection, setCollection] = useState([]);

    const [showInfo, setShowInfo] = useState(false);

    useEffect (() => {
        console.log("collection : " , collection);
        console.log("collection.id : " , collection[0]?.id);
    }, [collection])

    async function handleSubmit(event) {
        event.preventDefault();
        getCollection(username)
        setShowInfo(true);
    }
    async function getCollection(username) {
        console.log('A name was submitted: ' + username);
        const collectionData = await getCollectionByUser(username);
        setCollection(collectionData);
    }

    return(
        <div className={styles.container}>
            <img className={styles.image}src="./image1.jpg"/>
            <div>
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
                    <h3 className={styles.title}>Liste(s) de "{username}" :</h3>

                        {collection.map((list) => (
                            <div>
                            <p className={styles.nameList} onClick={() => {
                            deleteList(list.id)
                            getCollection(username)
                            }
                            }> Liste : "{list.listName.length ? list.listName : list.id}" </p>  
                            <div className={styles.list} key={list.id}>                         
                                {Object.entries(list.list).map(([key, value], index) => (
                                    <div className={styles.item} key={index}>
                                    <p>{key} : {value}</p>
                                    </div>
                                ))}                  
                            </div>
                            </div>
                        ))}       
                    <p className={styles.hint}>Hint : Pour supprimer une liste de courses, cliquez sur son nom</p>
                </div>)}
            </div>
            </div>
      
        </div>
        
    )
}