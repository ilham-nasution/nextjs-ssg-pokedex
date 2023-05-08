import PokemonInterface from "@/types/PokemonInterface";

export default function PokemonMoves({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {pokemon.moves.slice(0, 12).map((move) => (
        <p
          key={move.move.name}
          className="text-center border-2 border-black rounded-xl shadow-md text-sm"
        >
          {move.move.name}
        </p>
      ))}
    </div>
  );
}
