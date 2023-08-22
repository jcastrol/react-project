
import { useCallback } from 'react';
import { ListItems } from '../components/ListItems';
import { useCharactersFetch } from '../hooks/useCharacters';
import { CharacterType } from '../Interfaces/Character';

type Props={
    navigation:(id: number, character: CharacterType) => void
}

const Home = ({navigation}:Props) => {
    const [charactersState] = useCharactersFetch();

    

    return (
        <ListItems state={charactersState} onClick={navigation} />
    )
}
export default Home