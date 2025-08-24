interface ISearchBar
{
    searchTerm:string;
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>;
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar=(param:ISearchBar)=>{
    return (<> <div className="flex justify-end items-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={param.searchTerm}
          onChange={(e) => {
            param.setSearchTerm(e.target.value);
            param.setCurrentPage(1); 
          }}
          className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div></>)
}

export default SearchBar;