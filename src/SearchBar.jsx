export function SearchBar () {
    return (
        <input type="search"
          className="searchbox"
          placeholder="&#x09; Search for products, brands and more (not functional yet)"
        />
    );
  }

// need to add functionality yet

// import { useState } from "react";
// import { useFilters } from "./hook/useFilter"

// export function SearchBar () {
//   const [searchString, setSearchString] = useState("");
//   const { searchedData } = useFilters();

//   const searchResultsOnEnter = async (e) => {
//     if (e.key === "Enter") {
//         await setSearchString(e.target.value)}
//         searchedData(searchString)
//     }

//   return (
//       <input type="search"
//         className="searchbox"
//         placeholder="&#x09; Search for products, brands and more (not functional yet)"
//         value={searchString}
//         onKeyDown={searchResultsOnEnter}
//       />
//   );

// }
