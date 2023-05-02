export default function PokemonType({ type }) {
  return (
    <p className="rounded-lg shadow-lg text-center text-white p-1 w-24 bg-white/10 text-xs m-1">
      {type.type.name}
    </p>
  );
}
