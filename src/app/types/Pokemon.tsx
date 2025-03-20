export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonData {
  count: number;
  results: PokemonType[];
}
