import { makeAutoObservable } from "mobx"

export class PseudoStore {
    pseudo: string = ''
    id: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setId(id: string) {
        this.id = id
    }

    setPseudo(pseudo: string) {
        console.log(pseudo)
        this.pseudo = pseudo
    }


}

export const pseudoStore = new PseudoStore()