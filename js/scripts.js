let pokemonList = [
    {pokemonName: 'Onix', height: 8.8 , type: ['rock', 'ground'], evolution: 'Steelix' },
    {pokemonName: 'Infernape', height: 1.2, type: ['fire', 'fighting'], evolution:'Monferno'},
    {pokemonName: 'Metagross', height: 1.6, type:[ 'pyschic', 'steel'], evolution: 'Metang'}
];

pokemonList.forEach(function(names) {
  document.write(
    names.pokemonName + " (Height: " + names.height + ")"
);

  
    if (names.height > 1.5) {
      document.write(" - Wow, that's big !" + "</br>" + "</br>");
    } else {
      document.write("</br>" + "</br>");
    }
});
  




/* Is this how I wrap into IIFE ? 

(function () {
 let pokemonList = [
    {pokemonName: 'Onix', height: 8.8 , type: ['rock', 'ground'], evolution: 'Steelix' },
    {pokemonName: 'Infernape', height: 1.2, type: ['fire', 'fighting'], evolution:'Monferno'},
    {pokemonName: 'Metagross', height: 1.6, type:[ 'pyschic', 'steel'], evolution: 'Metang'}
];
  // put your code in here
})(); */




 









// Previous code
//for (let i = 0; i < pokemonList.length; i++) {
 //  document.write(
   // pokemonList[i].pokemonName + " (Height: " + pokemonList[i].height + ")"
  // );


  //let pokemonList = [
  //  {pokemonName: 'Onix', height: 8.8 , type: ['rock', 'ground'], evolution: 'Steelix' },
  //  {pokemonName: 'Infernape', height: 1.2, type: ['fire', 'fighting'], evolution:'Monferno'},
  //  {pokemonName: 'Metagross', height: 1.6, type:[ 'pyschic', 'steel'], evolution: 'Metang'}
//];
