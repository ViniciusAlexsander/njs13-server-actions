"use client";

import { useEffect, useState } from "react";

interface IPokemonListProps {
  search: (search: string) => Promise<string[]>;
}

export default function PokemonList({ search }: IPokemonListProps) {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    search("").then((names) => setPokemonNames(names));
  }, [search]);

  const onClick = async () => {
    setPokemonNames(await search(searchWord));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <button
          onClick={onClick}
          type="submit"
          className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Search
        </button>
      </div>
      <div className="text-4xl py-5">Names: {pokemonNames.join(", ")}</div>
    </div>
  );
}
