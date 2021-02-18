let pokemonList = [
    {pokemonName: 'Onix', height: 8.8 , type: ['rock', 'ground'], evolution: 'Steelix' },
    {pokemonName: 'Infernape', height: 1.2, type: ['fire', 'fighting'], evolution:'Monferno'},
    {pokemonName: 'Metagross', height: 1.6, type:[ 'pyschic', 'steel'], evolution: 'Metang'}
];

let pokemonNames = [ 'Onix ',  ' Infernape ',  ' Metagross ' ];
let pokemonHeights = [8.8, 1.2, 1.6];
for (let i = 0; i < pokemonNames.length ; i++ ){
    document.write(pokemonNames[i] + 'Height:' + pokemonHeights[i]);

    if (pokemonHeights > 1.5) {
        document.write(' Wow, thats big !');
    }
}