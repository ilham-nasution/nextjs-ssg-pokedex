import PokemonInterface from "@/types/PokemonInterface";

export default function PokemonBaseStats({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  return (
    <>
      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className="flex items-center">
          <p className="text-gray-500 mb-3 w-40 md:w-52 capitalize">
            {stat.stat.name}
          </p>
          <p className="w-16">{stat.base_stat}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${stat.base_stat / 1.5}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}
