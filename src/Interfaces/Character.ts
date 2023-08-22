import { Origin } from "./Origin"

export interface CharacterType{
id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  url: string
  created: string
  origin:Origin
  location:Origin
  episode:String[]
}