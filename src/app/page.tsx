"use client";

import { useState, useEffect } from "react";
import { MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import PokemonCard from "./components/pokemonCard";
import { PokemonData } from "./types/Pokemon";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
          (page - 1) * limit
        }`
      );
      const data: PokemonData = await res.json();
      setPokemonData(data);
    }
    fetchPokemon();
  }, [page, limit]);

  let totalPages = 0;
  if (pokemonData && pokemonData.count) {
    totalPages = Math.ceil(pokemonData.count / limit);
  }

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleLimit = (event: SelectChangeEvent<number>) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-center mt-4 font-bold text-xl">PokeData</h1>
      <ul>
        <div className="flex flex-wrap justify-center mt-8 gap-2 ">
          {pokemonData.results.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
      </ul>
      <div className="flex flex-row mt-8 justify-center items-center gap-9">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePagination}
        />
        <Select value={limit} onChange={handleLimit}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </div>
    </>
  );
}
