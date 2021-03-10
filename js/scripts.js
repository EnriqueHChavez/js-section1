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

  // create getAll function to retrieve the entire pokemonList array

  // return your add and getAll functions here as key/value pair
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
    
    function getAll() {
      return pokemonList;
    }

    return {
      getAll: getAll,
      add : add
    };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(  pokemon.pokemonName + " (Height: " + pokemon.height + ") " + "</br>" ); 
  
  
});
//pokemonRepository.getAll(); 
// the list of Pokemon should be displayed exactly how it was before, the only thing that will be different is your code



 









