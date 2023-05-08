import Image from "next/image";

import PokemonInterface from "@/types/PokemonInterface";
import PokemonType from "@/components/PokemonType";
import { useState } from "react";
import useBgCard from "@/composables/useBgCard";
import usePokemonNum from "@/composables/usePokemonNum";
import PokemonAbout from "@/components/PokemonAbout";
import PokemonBaseStats from "@/components/PokemonBaseStats";
import PokemonEvolution from "@/components/PokemonEvolution";
import PokemonMoves from "@/components/PokemonMoves";

export default function Pokemon({
  pokemon,
  evo,
}: {
  pokemon: PokemonInterface;
  evo: any;
}) {
  const [tabs, setTabs] = useState("about");
  let bgCard = useBgCard(pokemon.types[0]);
  const pokemonNum = usePokemonNum(pokemon.id);

  return (
    <div className={`${bgCard}`}>
      <div className=" h-72">
        <div className="flex justify-between items-center px-2">
          <div>
            <h1 className="text-3xl font-bold text-white capitalize">
              {pokemon.name}
            </h1>
            <div className="flex">
              {pokemon.types.map((type) => (
                <PokemonType key={type.type.name} type={type} />
              ))}
            </div>
          </div>
          <p className="text-2xl font-bold text-white">#{pokemonNum}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={pokemon.sprites.other?.dream_world.front_default}
          width={208}
          height={208}
          alt={pokemon.name}
          className="absolute top-28 h-52"
          priority
        />
      </div>
      <div className="bg-white rounded-t-xl pt-5">
        <div className="mb-4">
          <ul className="flex justify-between">
            <li>
              <button
                className={
                  tabs === "about"
                    ? "inline-block text-black border-black rounded-t-lg py-4 px-4 text-center border-b-2"
                    : "inline-block text-gray-500 hover:text-black hover:border-black rounded-t-lg py-4 px-4 text-center border-transparent border-b-2"
                }
                type="button"
                onClick={() => setTabs("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={
                  tabs === "base stats"
                    ? "inline-block text-black border-black rounded-t-lg py-4 px-4 text-center border-b-2"
                    : "inline-block text-gray-500 hover:text-black hover:border-black rounded-t-lg py-4 px-4 text-center border-transparent border-b-2"
                }
                type="button"
                onClick={() => setTabs("base stats")}
              >
                Base Stats
              </button>
            </li>
            <li>
              <button
                className={
                  tabs === "evolution"
                    ? "inline-block text-black border-black rounded-t-lg py-4 px-4 text-center border-b-2"
                    : "inline-block text-gray-500 hover:text-black hover:border-black rounded-t-lg py-4 px-4 text-center border-transparent border-b-2"
                }
                type="button"
                onClick={() => setTabs("evolution")}
              >
                Evolution
              </button>
            </li>
            <li>
              <button
                className={
                  tabs === "moves"
                    ? "inline-block text-black border-black rounded-t-lg py-4 px-4 text-center border-b-2"
                    : "inline-block text-gray-500 hover:text-black hover:border-black rounded-t-lg py-4 px-4 text-center border-transparent border-b-2"
                }
                type="button"
                onClick={() => setTabs("moves")}
              >
                Moves
              </button>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <div className={tabs === "about" ? "show" : "hidden"}>
            <PokemonAbout pokemon={pokemon} />
          </div>
          <div className={tabs === "base stats" ? "show" : "hidden"}>
            <PokemonBaseStats pokemon={pokemon} />
          </div>
          <div className={tabs === "evolution" ? "show" : "hidden"}>
            <PokemonEvolution evo={evo} />
          </div>
          <div className={tabs === "moves" ? "show" : "hidden"}>
            <PokemonMoves pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Array.from({ length: 60 }, (_, i) => i + 1).map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  const species_res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
  );
  const species = await species_res.json();

  const res_evo = await fetch(species.evolution_chain.url);
  const evo = await res_evo.json();

  return {
    props: { pokemon, evo },
  };
}
