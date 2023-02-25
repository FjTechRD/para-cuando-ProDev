import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchInput(e.target.searchBarInput.value);
    setSearchInput('');
  };

  return (
    <div className="search__bar relative">
      <input
        className="rounded-2xl w-72 px-2.5"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
        onSubmit={handleSearchClick}
        id="searchBarInput"
      />
      <AiOutlineSearch className="absolute top-1 right-2" />
    </div>
  );
};

export default SearchBar;
