import db from "./firebase.js";
import { collection,doc,addDoc,updateDoc,deleteDoc,getDocs,query,where } from "firebase/firestore";

async function addToDB (data) {
    try {
        const docRef = await addDoc(collection(db, "utilisateurs"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function getCollection() {
    const collectionArray = [];
    try {
        const querySnapshot = await getDocs(collection(db, "utilisateurs"));
        querySnapshot.forEach((doc) => {
            collectionArray.push(doc.data());
        });
        return collectionArray;
    } catch (error) {
        console.log(error);
    }
}
async function getCollectionByUser(username) {
    const collectionArray = [];
    try {
        const q = query(collection(db, "utilisateurs"), where("username", "==", username));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            collectionArray.push({...doc.data(),id : doc.id});
        });
        console.log("ouioui : " + collectionArray)
        console.log(collectionArray[0])
        return collectionArray;
    } catch (error) {
        console.log(error);
    }
}
async function deleteList(id) {
    try {
        await deleteDoc(doc(db, "utilisateurs", id));
        alert("Document successfully deleted!");
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}

export {addToDB, getCollection, getCollectionByUser,deleteList}