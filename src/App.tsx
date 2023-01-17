import { useState, useEffect } from 'react'
import './App.css'

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
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
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
 

  return (
    <div className="App">
      <h3>Hola mundo desde React con TS</h3>
      <ul>
        {subs.map(sub => {
          return(
            <li key={sub.nick}>
              <img src={sub.avatar} alt={sub.nick} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
