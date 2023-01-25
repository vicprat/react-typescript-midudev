import { useState, useEffect, useRef } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/Lists'
import { Sub } from './components/types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'Logan',
    avatar: 'https://i.pravatar.cc/150?=dapelu',
    subMonths: 2,
    description: 'Esta es la descripcion del perro más hermoso'
  },
   {
    nick: 'Frankie',
    avatar: 'https://i.pravatar.cc/150?=perro',
    subMonths: 2
  }
]

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumer] = useState<AppState['newSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
 
  const handleNewsub = (newSub: Sub): void => {
    setSubs(sub => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h3>Hola mundo desde React con TS</h3>
     <List subs={subs}/>
     <Form onNewSub={handleNewsub}/>
    </div>
  )
}

export default App
