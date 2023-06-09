import PokemonCard from "@/components/PokemonCard";
import PokemonInterface from "@/types/PokemonInterface";
import Link from "next/link";

export default function Home({
  pokemonList,
}: {
  pokemonList: PokemonInterface[];
}) {
  return (
    <div className="container mx-auto px-2">
      <h1 className="font-bold text-3xl my-3">Pokedex</h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="flex items-center justify-center bg-white px-4 py-3">
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <Link
            href="/page/1"
            className="text-white bg-indigo-600 relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 cursor-pointer"
          >
            1
          </Link>
          <Link
            href="/page/2"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 cursor-pointer"
          >
            2
          </Link>
          <Link
            href="/page/3"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 cursor-pointer"
          >
            3
          </Link>
          <Link
            href="/page/4"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 cursor-pointer"
          >
            4
          </Link>
          <Link
            href="/page/5"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 cursor-pointer"
          >
            5
          </Link>
          <Link
            href="/page/2"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
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
