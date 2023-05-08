import Image from "next/image";
import Link from "next/link";

import PokemonType from "@/components/PokemonType";
import PokemonInterface from "@/types/PokemonInterface";

export default function PokemonCard({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  let bgCard;

  switch (pokemon.types[0].type.name) {
    case "grass":
    case "bug":
      bgCard = "bg-green-600";
      break;

    case "fire":
      bgCard = "bg-red-600";
      break;

    case "water":
      bgCard = "bg-blue-600";
      break;

    case "poison":
      bgCard = "bg-purple-600";
      break;

    case "electric":
      bgCard = "bg-yellow-500";
      break;

    case "ground":
      bgCard = "bg-amber-600";
      break;

    case "fairy":
      bgCard = "bg-pink-600";
      break;

    case "fighting":
      bgCard = "bg-amber-800";
      break;

    case "normal":
      bgCard = "bg-gray-600";
      break;

    default:
      bgCard = "bg-white";
      break;
  }

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={`${bgCard} rounded-lg p-2 shadow-lg h-24`}>
        <p className="font-bold text-white capitalize">{pokemon.name}</p>
        <div className="flex justify-between">
          <div>
            {pokemon.types.map((type) => (
              <PokemonType key={type.type.name} type={type} />
            ))}
          </div>
          <Image
            src={pokemon.sprites.other?.dream_world.front_default}
            width={56}
            height={56}
            alt={pokemon.name}
            className="w-14 h-14"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
