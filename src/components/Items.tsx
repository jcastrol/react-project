
import { useCallback } from 'react'
import { CharacterType } from '../Interfaces/Character'
import { getIdUrl } from '../utils/getIdUrl'

type Props = {
    character:CharacterType,
    onClick:(id: number, character: CharacterType) => void
}

const Items = ({character,onClick}: Props) => {
  const handleClick=useCallback((url:string)=>{
    const id=getIdUrl(url)
    if(id!==null){
      onClick(id,character)
    }
  },[onClick,character])
  return (
    <>
        <h2 className='title'>{character.name}</h2>
        <img className='imageInCard' src={character.image} alt="character.name" />
        <p className='text'><span>status:</span> {character.status}</p>
        <p className='text'><span>species:</span> {character.species}</p>
        <p className='text'><span>gender:</span> {character.gender}</p>
        {
            !!character.origin.url
            ?<button onClick={()=>{handleClick(character.origin.url)}} >Origin: {character.origin.name}</button>
            :<button onClick={()=>{handleClick(character.location.url)}}>Location: {character.location.name}</button>
        }
        
    </>
  )
}

export default Items