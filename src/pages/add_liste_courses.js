import React from "react";
import styles from '../styles/add_list.module.css'
import Header from './header'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Add_liste_courses() {

  const [item, setItem] = useState("")
  const [number, setNumber] = useState(0)
  const [list, setList] = useState({})
  const [load,setLoad] = useState(false);

  const [username, setUsername] = useState("")
  const [listName, setListName] = useState("")

  const [hideInfo, setHideInfo] = useState(false) 

  useEffect(() => {
    // Get the list from local storage
    const listString = localStorage.getItem('list')
    if (listString && !load) {
      const list = JSON.parse(listString)
      setList(list)     
      setLoad(true)
    }
    else
    localStorage.setItem('list', JSON.stringify(list));

  }, [list]);

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
  }
  async function handleSaveList(event) {
    event.preventDefault();
    if(hideInfo == false){
      alert("Veuillez renseigner votre username")
    }
    else {
      try {
        const response = await axios.post('http://localhost:3000/api/courses', {list,username: username,listName: listName});
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      setList({})
      setListName("")
      localStorage.removeItem('list')
      alert("Liste sauvegardée")
      console.log(list) 
    }
    
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
      <div className={styles.userInteraction}>
      {!hideInfo && (
           <div className={styles.handleUsername}>
              <form className={styles.forms} onSubmit={(event) => {
                  event.preventDefault();
                  setHideInfo(true);
                }}>
                <label className={styles.label}>
                  Quelle est votre Username ? 
                  <input className={styles.input} type="text" value={username} onChange={event => setUsername(event.target.value)} />
                </label>
              </form> 
           </div>
        )}

      <div className={styles.userInteraction}>
        {hideInfo && <h1 className={styles.title}>Utilisateur actuel : "{username}"</h1>}
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

        <form className={styles.validate} onSubmit={handleSaveList}>
          <label className={styles.label}>
            Nom de la liste de courses :
            <input className={styles.input} type="text" value={listName} onChange={event => setListName(event.target.value)} />
          </label>
          <button className={styles.submit} type="submit" >Valider la liste</button>
        </form>
        
        <form onSubmit={handleRemove}>
          <button className={styles.submit} type="submit">Supprimer la liste</button>
        </form>
        </div>
        <div className={styles.image}></div>
      </div>
      
      <div className={styles.grid} style={{"--showInfo" : Object.entries(list).length > 0 ? "1px" : 0}}>
        {Object.entries(list).map(([key, value], index) => (
            <div className={styles.item} key={index}>
              <p>{key} : {value}</p>
            </div>
          ))}
      </div>    
        
    </div>
    
  )
}

export default Add_liste_courses