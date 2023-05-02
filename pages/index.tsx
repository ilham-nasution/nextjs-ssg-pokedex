import PokemonCard from "@/components/PokemonCard";
import PokemonInterface from "@/types/PokemonInterface";

export default function Home({
  pokemonList,
}: {
  pokemonList: PokemonInterface[];
}) {
  return (
    <div className="container mx-auto px-2">
      <h1 className="font-bold text-3xl my-3">Pokedex</h1>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const pokemons = await res.json();

  const pokemonList = [];

  for (const pokemon of pokemons.results) {
    const res = await fetch(pokemon.url);
    pokemonList.push(await res.json());
  }

  return {
    props: { pokemonList },
  };
}
