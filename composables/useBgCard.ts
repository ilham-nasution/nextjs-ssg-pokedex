export default function useBgCard({ type }: { type: { name: string } }) {
  let bgCard;

  switch (type.name) {
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

  return bgCard;
}
