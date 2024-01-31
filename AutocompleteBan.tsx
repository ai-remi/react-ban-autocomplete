import React, { useState } from "react";
import { useAutocomplete, Feature } from "./useAutocomplete"; // Import your custom hook
import AutocompleteResult from "./AutocompleteResult"; // Import your AutocompleteResult component

const AutocompleteBan: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { data: results, isError } = useAutocomplete(query); // Use the custom hook

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const selectResult = (id: string) => {
    const currentResult = results?.find((item) => item.properties.id === id);
    if (currentResult) {
      const currentAddressTemplated = templateQuery(currentResult);
      setQuery(currentAddressTemplated);
    }
  };

  const templateQuery = (address: Feature) => {
    return address.properties.name + " " + address.properties.context;
  };

  return (
    <div className="ban-search">
      <input
        className="searchBox"
        type="text"
        value={query}
        onChange={handleChange}
      />
      {isError ? (
        <div>Error fetching address suggestions</div>
      ) : (
        <AutocompleteResult results={results} selectResult={selectResult} />
      )}
    </div>
  );
};

export default AutocompleteBan;
