import { useEffect, useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Search from './components/pokemon/Search';
import { getPokemon } from './ultils/getPokemon';
import PokemonCard from './components/pokemon/PokemonCard';

interface Pokemon {
  name: string;
  id: number;
  types: string[];
}

const App = () => {
  const [search, setSearch] = useState('');
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filters, setFilters] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon('/public/pokemon-data.json').then((data: Pokemon[]) => {
      setAllPokemons(data);
    });
  }, []);

  useEffect(() => {
    setFilters(
      allPokemons.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <div className="flex flex-col gap-2 h-screen w-screen items-center">
      <Header />
      <main className="flex-1 flex flex-col items-center gap-4">
        <Search setSearch={setSearch} />
        <div className="flex gap-4 flex-wrap justify-center">
          {filters.map((pokemon) => {
            return <PokemonCard data={pokemon} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
