import { useEffect, useState } from "react"
import { RouteParams } from "../App"
import { CharacterType } from "../Interfaces/Character"
import { Location } from "../Interfaces/Locations"
import DetailsCharacter from "../components/DetailsCharacter"
import { DetailsLocation } from "../components/DetailsLocation"
import { useLocationFetch } from "../hooks/useOrigin"
import { CharactersService } from "../services/CharactersService"
import { getIdUrl } from "../utils/getIdUrl"
import { DetailsResident } from "../components/detailsResident"


type Props = {
    route: RouteParams
}

const DetailsPage = ({ route }: Props) => {
    const { character, id } = route
    const [state] = useLocationFetch(id);
    const [resident, setresident] = useState<CharacterType[]>([])
    useEffect(() => {
        if (state.type === 'done' && resident.length===0 ) {
            const r = state.data.residents.slice(0, 3).map(resident => (getIdUrl(resident)))
            r.forEach(resident => {
                if (resident !== null) {
                    CharactersService.getOne(resident).then((resp) => {
                        setresident((prev) => ([...prev, resp]))
                    })

                }

            })

        }
    }, [state.type])
    return (
        <div className="character-details">
            <DetailsCharacter character={character} />
            <h3>{!!character.origin.url ? "Origin" : "Location"}</h3>
            {state.type === 'done' ? <DetailsLocation location={state.data} /> : <p>Loading...</p>}
            {
                resident.length > 0 ? <DetailsResident characters={resident} />
                    : <></>
            }
        </div>
    )
}

export default DetailsPage