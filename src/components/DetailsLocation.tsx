import React from 'react'
import { Location } from '../Interfaces/Locations'

type Props = {
  location: Location
}

export const DetailsLocation = ({ location }: Props) => {
  return (
    <>

      <div className="character-info">
        <p><strong>Name:</strong> {location.name}</p>
        <p><strong>Type:</strong> {location.type}</p>
        <p><strong>Dimension:</strong> {location.dimension}</p>
      </div>

    </>
  )
}