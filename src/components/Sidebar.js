import React, {useState, useEffect} from 'react'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import firebaseApp from '../firebase/credenciales'
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)


export const Sidebar = ({user, setCurrentChanel}) => {
  useEffect(()=>{
    getChanels()
  } , [])

  const [chanels, setChanels] = useState([])
  const addChanel =() => {
    const name = prompt('nombre del canal?')
    if(name) {
      const docRef = doc(db, `chanels/${name}`)
      setDoc(docRef, {
        id: new Date().getTime(),
        name: name
      })
    }
    getChanels();
  }
  const getChanels = async () => {
    const arr = []
    const collectionRef = collection(db, 'chanels');
    const list = await getDocs(collectionRef)
    list.forEach(e => {
      arr.push(e.data())
    });
    setChanels(arr)
  }
  return (
    <div>
      <div>
        <h4>Canales</h4>
        <AddIcon onClick={()=> addChanel()}/>
        <div>
          {
            chanels?.map(e => <div key={e.id} onClick={()=> setCurrentChanel(e.name)}>
              <span>#</span> {e.name}
            </div>)
          }
        </div>
      </div>
      <div>
        <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
      </div>
      <button onClick={()=> signOut(auth)}>cerrar sesion</button>
    </div>
  )
}
