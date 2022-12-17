import React, { useState } from "react";

import { observer } from "mobx-react-lite";
import { pseudoStore } from "../stores/pseudo";
import { summonerApi } from "../utils/apiRiot";

export const PseudoBox = observer(() => {

    let pseudo = pseudoStore.pseudo 

    let setPseudo = (pseudo:string) => pseudoStore.setPseudo(pseudo)

    const [infos, setInfos] = useState('')

    let research = async():Promise<void> => {
        console.log(`research  ${pseudoStore.pseudo}`)
        setInfos(JSON.stringify(await summonerApi.fetchSummonerByName(pseudo)))
        console.log(infos)
        setShouldShowInfos(true)
    }
    const [shouldShouldInfos, setShouldShowInfos] = useState(false)

    
    return(
        <div>
        <label>
            <input type='text' value={pseudo} onChange={(e) => setPseudo(e.target.value)}></input>
        </label>
        <button type="button" onClick={research}></button>
        {shouldShouldInfos && (
            <span>{infos}</span>
        )}
        </div>
    )
    
})