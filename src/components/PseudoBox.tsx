import React from "react";

import { observer } from "mobx-react-lite";
import { pseudoStore } from "../stores/pseudo";
export const PseudoBox = observer(() => {

    let pseudo = pseudoStore.pseudo 

    let setPseudo = (pseudo:string) => pseudoStore.setPseudo(pseudo)

    let research = () => console.log(`research ${pseudoStore.pseudo}`)
    return(
        <div>
        <label>
            <input type='text' value={pseudo} onChange={(e) => setPseudo(e.target.value)}></input>
        </label>
        <button type="button" onClick={research}></button>
        </div>
    )
    
})