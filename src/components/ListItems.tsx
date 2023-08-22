
import Items from './Items'
import '../assets/css/Card.css'
import { CharacterType } from '../Interfaces/Character'
import { State } from '../hooks/useFetch'

type Props = {
  state: State<CharacterType[]>
  onClick:(id: number, character: CharacterType) => void
}

export const ListItems = ({
  state,
  onClick
}: Props) => {
  if (state.type === "pending") {
    return <p>loading...</p>;
  }
  if (state.type === "done") {
    return (
      <div className='listCharacter'>
        {
          state.data.map((character) => (
            <div className='card' key={character.id} ><Items character={character} onClick={onClick}/></div>

          ))
        }
      </div>
    )
  }

  if (state.type === "fail") {
    return <p>usersState.error</p>;
  }

  // null for type = "idle".
  return null;
}
