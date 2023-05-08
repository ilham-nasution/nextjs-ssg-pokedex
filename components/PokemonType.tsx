export default function PokemonType({
  type,
}: {
  type: { type: { name: string } };
}) {
  return (
    <p className="rounded-lg shadow-lg text-center text-white p-1 w-24 bg-white/10 text-xs my-1">
      {type.type.name}
    </p>
  );
}
