import React, {useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import { ExpandMore, Add, Mic, Settings, Headset } from '@material-ui/icons'
import firebaseApp from '../firebase/credenciales'
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore'
import { map } from '@firebase/util'
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
        <Add onClick={addChanel}/>
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
