let pokemonList = [
    {pokemonName: 'Onix', height: 8.8 , type: ['rock', 'ground'], evolution: 'Steelix' },
    {pokemonName: 'Infernape', height: 1.2, type: ['fire', 'fighting'], evolution:'Monferno'},
    {pokemonName: 'Metagross', height: 1.6, type:[ 'pyschic', 'steel'], evolution: 'Metang'}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(
      pokemonList[i].pokemonName + " (Height: " + pokemonList[i].height + ")"
    );
  
    if (pokemonList[i].height > 1.5) {
      document.write(" - Wow, that's big !" + "</br>" + "</br>");
    } else {
      document.write("</br>" + "</br>");
    }
  }
  