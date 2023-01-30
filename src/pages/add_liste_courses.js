import React from "react";
import styles from '../styles/add_list.module.css'
import Header from './header'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Add_liste_courses() {

  const [item, setItem] = useState("")
  const [number, setNumber] = useState(0)
  const [list, setList] = useState({})

  const [showInfo, setShowInfo] = useState(false) 

  useEffect(() => {
    // Get the list from local storage
    const listString = localStorage.getItem('list')
    if (listString) {
      const list = JSON.parse(listString)
      setList(list)
      setShowInfo(true) 
    }
  }, [])

  function handleAddItem() {

    setList(prevList => ({ ...prevList, [item]: number }));
    setItem("")
    setNumber(0)
    /*
    if(list[item] == undefined) {
      setList(prevList => ({ ...prevList, [item]: number }));
    }
    else{
      setList(prevList => ({ ...prevList, [item]: parseInt(list[item]) + parseInt(number) }) );
    }
    */
  }
    function handleSubmit(event) {
    event.preventDefault();
    handleAddItem()
    localStorage.setItem('list', JSON.stringify(list));
    setShowInfo(true) 
  }
  async function handleSaveList(event) {
    event.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/courses', {list,username:"hugo"});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setList({})
    alert("Liste sauvegardée")
    console.log(list)
  }
    function handleRemove(event) {
    event.preventDefault();
    setList({})
    localStorage.removeItem('list')
    console.log(list)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div>
        <form className={styles.forms} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Item :
            <input className={styles.input} type="text" value={item} onChange={event => setItem(event.target.value)} />
          </label>
          <label className={styles.label}>
            Number :
            <input className={styles.input} type="number" value={number} onChange={event => setNumber(event.target.value)} />
          </label>
          <br />
          <button className={styles.submit} type="submit">Ajouter</button>
        </form>

        {showInfo && (
          <div className={styles.grid}>
            {Object.entries(list).map(([key, value], index) => (
                <div className={styles.item} key={index}>
                  <p>{key} : {value}</p>
                </div>
              ))}

          </div>
        )}

        <form onSubmit={handleSaveList}>
          <button className={styles.submit} type="submit" >Valider la liste</button>
        </form>
        <form onSubmit={handleRemove}>
          <button className={styles.submit} type="submit">Supprimer la liste</button>
        </form>
      </div>
  

      <div className={styles.image}></div>

    </div>
  )
}

export default Add_liste_courses