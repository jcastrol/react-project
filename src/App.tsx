

import { useState } from 'react'
import './App.css'
import DetailsPage from './page/DetailsPage'
import Home from './page/Home'
import { CharacterType } from './Interfaces/Character'
import { Location } from './Interfaces/Locations'
export type RouteParams = {
  character: CharacterType,
  id: Location["id"]
}
function App() {
  const [changeview, setchangeview] = useState(0)
  const [route,setRoute]=useState<RouteParams>({} as RouteParams)

  const navigate=(id:number,character:CharacterType)=>{
    setchangeview(id);
    setRoute({
      character:character,
      id:id
    })
  }
  return (
    changeview===0 
    ?<Home navigation={navigate}/> 
    :<DetailsPage route={route}/>
  )
}

export default App
