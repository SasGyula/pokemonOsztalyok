//Egy pokemonnak van neve, tartozik hozzá egy kép, és tartozik hozzá egy mondat amit ki tud mondani

export default class Pokemon {

    #nev = ""
    #kep = ""
    #mondat = ""

    constructor(nev, kep, szuloElem){
        //this mindig a konkrét objektumpéldányra mutat az EGO
        this.#nev = nev
        this.#kep = kep
        this.#mondat = "Jó estét!"
        this.szuloElem = szuloElem;
        this.#megjelenit()
    }
    //getter a névre
    get nev(){
        return this.#nev
    }
    get kep(){
        return this.#kep
    }
    get mondat(){
        return this.#mondat
    }
    //mondtat átírására settert használunk
    set mondat(szoveg){
        //kiszűrjük a csúnya szavakat
        this.#mondat = szoveg
    }
    beszel(){
        console.log(this.#mondat)
    }
    #megjelenit(){
        let txt = `
            <div>
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.nev}">
            </div>
        `
        this.szuloElem.append(txt)

    }

}