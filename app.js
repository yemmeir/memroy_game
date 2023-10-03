const pokeapi = "https://pokeapi.co/api/v2/pokemon/1";

const loadpokeman = async () => {
  const res = await fetch(pokeapi + `1`);
  const pokeman = await res.json();
  console.log(pokeman);
};
