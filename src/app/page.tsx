"use client";

import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PokemonCard from "./components/pokemonCard";
import { PokemonData } from "./types/Pokemon";
import Paginator from "./components/Paginator";
import LimitOptions from "./components/LimitOptions";
import { apiBase } from "./constants";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    async function fetchPokemon() {
      const offset = (page - 1) * limit;
      const res = await fetch(apiBase + `?limit=${limit}&offset=${offset}`);
      const data: PokemonData = await res.json();
      setPokemonData(data);
    }
    fetchPokemon();
  }, [page, limit]);

  let totalPages = 0;
  if (pokemonData && pokemonData.count) {
    totalPages = Math.ceil(pokemonData.count / limit);
  }

  if (!pokemonData)
    return (
      <div className="flex justify-center mt-32">
        <CircularProgress />
      </div>
    );

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
        <Paginator totalPages={totalPages} page={page} setPage={setPage} />
        <LimitOptions limit={limit} setLimit={setLimit} setPage={setPage} />
      </div>
    </>
  );
}
