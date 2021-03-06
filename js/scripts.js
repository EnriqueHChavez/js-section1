


 let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  // create add function to add a pokemon

  // create getAll function to retrieve the entire pokemonList array

  // return your add and getAll functions here as key/value pair
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct")
    }
  }
  function getAll(){
    return pokemonList;
  }
      function addListItem(pokemon){
         
          let  pokemonList = document.querySelector(".pokemon-list");
           let listpokemon = document.createElement("li");
           let button = document.createElement("button");
           button.innerText = pokemon.name;
           button.classList.add("button-class");
           listpokemon.appendChild(button);
           pokemonList.appendChild(listpokemon);
         button.addEventListener("click", function(event) {
           showDetails(pokemon);
         });
         
      }

      
     function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }




function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      pokemonRepository.showModal(item);
    });
    
  }



function showModal(pokemon) {
var div = document.createElement("div");
document.getElementById("modal-container").appendChild(div);
}



return {
    add: add,
    getAll: getAll,
    addListItem : addListItem,
    loadList: loadList,
    
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal : showModal
  };
})();
     
  pokemonRepository.loadList().then(function(){  
pokemonRepository.getAll().forEach(function(pokemon){

  pokemonRepository.addListItem(pokemon);

  
});
});
//pokemonRepository.getAll(); 
// the list of Pokemon should be displayed exactly how it was before, the only thing that will be different is your code











