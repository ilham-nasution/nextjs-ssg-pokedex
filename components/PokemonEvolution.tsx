export default function PokemonEvolution({ evo }: { evo: any }) {
  return (
    <div className="flex gap-5 justify-center">
      <p>{evo.chain.species.name}</p>
      <p>⇢</p>
      <p>{evo.chain.evolves_to[0].species.name}</p>
      <p>{evo.chain?.evolves_to[0]?.evolves_to[0]?.species?.name && "⇢"}</p>
      <p>{evo.chain?.evolves_to[0]?.evolves_to[0]?.species?.name}</p>
    </div>
  );
}
