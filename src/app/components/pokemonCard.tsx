import { Card, CardContent } from "@mui/material";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
  key: number;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={pokemon.url} className="p-4 w-1/6 min-w-[150px]">
      <Card variant="outlined">
        <CardContent>
          <p className="text-center">{pokemon.name}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
