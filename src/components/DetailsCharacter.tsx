import { CharacterType } from "../Interfaces/Character"
import { Location } from "../Interfaces/Locations"

import '../assets/css/Details.css'
import { useEffect } from "react"
import { getIdUrl } from "../utils/getIdUrl"


type Props = {
  character: CharacterType
  onBack?: () => void
}

const DetailsCharacter = ({  character }: Props) => {
  const { name, status, species, gender, image } = character;
  



    return (
      <>
        <h2>Character Details</h2>
        <img src={image} alt={name} />
        <div className="character-info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Species:</strong> {species}</p>
          <p><strong>Gender:</strong> {gender}</p>
        </div>
        
      </>
    )
  

}

export default DetailsCharacter