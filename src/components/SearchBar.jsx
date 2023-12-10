/* eslint-disable react/prop-types */

const SearchBar = ({ contacts, setSearchResult, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const result = contacts.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResult(result);
  };

  return (
    <div className="w-full h-[10%] mt-6 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        // value={searchTerm}
        className="w-[600px] px-2 py-3 border-[2px] border-gray-400 rounded-md shadow-lg"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
