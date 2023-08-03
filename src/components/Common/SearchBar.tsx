'use client';

import { usePortrait } from '@/hooks/screen';

const SearchBar = () => {
  const isPortrait = usePortrait();

  const handleButton = () => {};

  const handleSubmit = () => {};

  if (isPortrait) {
    return (
      <button
        className="btn btn-ghost border border-gray-500"
        type="button"
        onClick={handleButton}
        style={{ width: '48px' }}
      >
        <i className="fa-solid fa-search" />
      </button>
    );
  }

  return (
    <form className="form-control flex-row gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
      <button
        className="btn btn-outline"
        type="submit"
        style={{ width: '48px' }}
      >
        <i className="fa-solid fa-search" />
      </button>
    </form>
  );
};
export default SearchBar;
