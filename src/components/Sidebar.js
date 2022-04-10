import React, {useState, useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import firebaseApp from '../firebase/credenciales'
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LinearProgress from '@mui/material/LinearProgress'
import Tooltip from '@mui/material/Tooltip';

const db = getFirestore(firebaseApp)


export const Sidebar = ({user, setCurrentChanel, setUser, setUserColor, userColor}) => {
  useEffect(()=>{
    getChanels()
  } , [])

  const [chanels, setChanels] = useState([])

  const addChanel =() => {
    const name = prompt('¿nombre del canal?')
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
    <div className='sidebarContainer'>
      <div>
        <div className='sidebarHeader'>
         <h4 className='sidebarHeaderTitle'>Salas</h4>
         <div className='containerIconsHeader'>
           <Tooltip title='Crear sala'>
              <AddIcon className='iconHeader' onClick={()=> addChanel()}/>
           </Tooltip>
           <Tooltip title='Salir'>
              <MeetingRoomIcon className='iconHeader' onClick={()=> setUser(null)}/>
           </Tooltip>
         </div>
        </div>
        <div className='sidebarChanels'>
          {
            !chanels ? <LinearProgress/>
            :
            chanels.map(e => <div className='chanel' key={e.id} onClick={()=> setCurrentChanel(e.name)}>
            <h3># {e.name}</h3></div>)
          }
        </div>
      </div>
      <div className='infoUser'>
        <div className='colorpickercontainer'>
         <Tooltip title='Elige un color'>
            <input 
              className='colorPicker' 
              type='color' 
              value={userColor}
              onChange={(e)=> setUserColor(e.target.value)}
              />
          </Tooltip>
        </div>
        <div className='userName'>
          <h4 style={{color: userColor}}>{user.name}</h4>
        </div>
      </div>
    </div>
  )
}
