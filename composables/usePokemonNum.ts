export default function usePokemonNum(pokemon_id: number) {
  if (pokemon_id?.toString().length === 1) {
    return `00${pokemon_id}`;
  } else if (pokemon_id?.toString().length === 2) {
    return `0${pokemon_id}`;
  } else {
    return `${pokemon_id}`;
  }
}
