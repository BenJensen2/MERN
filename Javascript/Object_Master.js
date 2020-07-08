const pokémon = Object.freeze([
      { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
      { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
      { "id": 9,   "name": "Blastoise",  "types": ["water"] },
      { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
      { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
      { "id": 23,  "name": "Ekans",      "types": ["poison"] },
      { "id": 24,  "name": "Arbok",      "types": ["poison"] },
      { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
      { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
      { "id": 52,  "name": "Meowth",     "types": ["normal"] },
      { "id": 63,  "name": "Abra",       "types": ["psychic"] },
      { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
      { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
      { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
      { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
      { "id": 98,  "name": "Krabby",     "types": ["water"] },
      { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
      { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
      { "id": 133, "name": "Eevee",      "types": ["normal"] },
      { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
      { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
      { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
      { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
  ]);

  const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
  const pokemonId3 = pokémon.filter( p => p.id%3 == 0 ).map( poke => `${poke.id}`);
  const pokefire = pokémon.filter( p => p.types.includes("fire")).map( poke => `${poke.name}`)
  const poketypes = pokémon.filter( p => p.types.length > 1).map( poke => `${poke.name}`)
  const pokenames = pokémon.map( poke => `${poke.name}`)
  const pokenames99 = pokémon.filter(p => p.id>99).map( poke => `${poke.name}`)
  const pokepoison = pokémon.filter( p => p.types.includes("poison") && p.types.length == 1).map( poke => `${poke.name}`)
  const pokeflying = pokémon.filter( p => p.types.length > 1 && p.types[1].includes("flying")).map( poke => `${poke.name}`)
  const pokenormal = pokémon.filter( p => p.types.includes("normal")).map( poke => `${poke.name}`)

  console.log(bListPkmn);
  console.log(pokemonId3)
  console.log(pokefire)
  console.log(poketypes)
  console.log(pokenames)
  console.log(pokenames99)
  console.log(pokepoison)
  console.log(pokeflying)
  console.log(pokenormal.length)