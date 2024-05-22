import Pokemon from "./Pokemon.js"

const pokemon = new Pokemon("Ditto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRromWwFjEGVYmvDGOr1kU7VQ4smqN53D0q-gxJyKAnWg&s", $(".pokemonok"))

const pokemon2 = new Pokemon("Lucario", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png", $(".pokemonok"))

pokemon.beszel()
console.log(pokemon.nev)
pokemon.harciero = 2
console.log(pokemon.harciero)
delete pokemon.nev
console.log(pokemon.nev)
//privat adattagok elerese getterel
//pokemon.nev = "Roland"
pokemon.mondat = ("Szép napunk van!")
pokemon.beszel()