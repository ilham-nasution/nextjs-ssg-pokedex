import Image from "next/image";
import Link from "next/link";

import PokemonType from "@/components/PokemonType";
import PokemonInterface from "@/types/PokemonInterface";
import useBgCard from "@/composables/useBgCard";

export default function PokemonCard({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  let bgCard = useBgCard(pokemon.types[0]);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={`${bgCard} rounded-lg p-2 shadow-lg`}>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-white text-center capitalize">
              {pokemon.name}
            </p>
            {pokemon.types.map((type) => (
              <PokemonType key={type.type.name} type={type} />
            ))}
          </div>
          <Image
            src={pokemon.sprites.other?.dream_world.front_default}
            width={80}
            height={80}
            alt={pokemon.name}
            className="w-20 h-20"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
