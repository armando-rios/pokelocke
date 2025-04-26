import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Search from './components/pokemon/Search';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-2 h-screen w-screen items-center">
      <Header />
      <main className="flex-1 flex flex-col items-center gap-4">
        <Search setSearch={setSearch} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
