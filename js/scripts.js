let pokemonRepository = (function () {
  let pokemonList = [
    {
      pokemonName: "Onix",
      height: 8.8,
      type: ["rock", "ground"],
      evolution: "Steelix"
    },
    {
      pokemonName: "Infernape",
      height: 1.2,
      type: ["fire", "fighting"],
      evolution: "Monferno"
    },
    {
      pokemonName: "Metagross",
      height: 1.6,
      type: ["pyschic", "steel"],
      evolution: "Metang"
    }
  ];

  // create add function to add a pokemon
let pokemonRepository = (function() {
  let pokemonList = [];
  // create getAll function to retrieve the entire pokemonList array


    // return your add and getAll functions here as key/value pair
    return {
      add: function (pokemon){
        pokemonList.push(pokemon);
      },
      getALL : function() {
        return pokemonList;
      } 
  };
})();

// access your pokemonList via your forEach loop and display the Pokemon exctly how you did in the last lesson - number 3 of part 2 shows you how to do this
pokemonList.forEach(function(names) {
  document.write(
    names.pokemonName + " (Height: " + names.height + ")" );
});
// the list of Pokemon should be displayed exactly how it was before, the only thing that will be different is your code



 









