import React from 'react'
import { CharacterType } from '../Interfaces/Character'

type Props = {
  characters: CharacterType[]
}

export const DetailsResident = ({ characters }: Props) => {
  return (
    <>
      <h3>Residents</h3>
      <div className="residents-list">
        {
          characters.map((character) => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <p> {character.name}</p>
            </div>
          ))

        }

      </div>
    </>
  )
}