import PokemonList from "./pokemonList";

export default function PokemonSearch() {
  async function search(search: string) {
    "use server";

    console.log("searching for", search);

    const pokemonResult = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    const pokemonData = await pokemonResult.json();
    return pokemonData.results
      .filter((p: { name: string }) =>
        p.name.toLocaleLowerCase().includes(search.toLowerCase())
      )
      .map((p: { name: string }) => p.name)
      .slice(0, 50);
  }
  return (
    <main className="p-5">
      <PokemonList search={search} />
    </main>
  );
}
