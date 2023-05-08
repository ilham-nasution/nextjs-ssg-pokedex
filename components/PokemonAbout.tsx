import PokemonInterface from "@/types/PokemonInterface";

export default function PokemonAbout({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  return (
    <>
      <div className="flex items-center mb-3">
        <p className="text-gray-500 w-24">Species</p>
        <p className="capitalize text-sm">{pokemon.species.name}</p>
      </div>
      <div className="flex items-center mb-3">
        <p className="text-gray-500 w-24">Height</p>
        <p className="text-sm">{pokemon.height}0 cm</p>
      </div>
      <div className="flex items-center mb-3">
        <p className="text-gray-500 w-24">Weight</p>
        <p className="text-sm">{pokemon.weight}0 gram</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500 w-24">Abilities</p>
        {pokemon.abilities.map((ability, index) => (
          <p key={ability.ability.name} className="text-sm capitalize">
            {index > 0 && ", "}
            {ability.ability.name}
          </p>
        ))}
      </div>
    </>
  );
}
