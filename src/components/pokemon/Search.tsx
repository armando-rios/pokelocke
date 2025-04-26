import { useState } from 'react';

const Search = ({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          className="p-2 w-80 border rounded-xl outline-none"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
