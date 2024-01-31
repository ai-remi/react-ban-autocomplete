import React from "react";
import { Feature } from "./useAutocomplete";

interface AutocompleteResultProps {
  results: Feature[] | null; // Replace with the actual type of your results
  selectResult: (id: string) => void;
}

const AutocompleteResult: React.FC<AutocompleteResultProps> = ({
  results,
  selectResult,
}) => {
  if (!results) {
    return null; // You can also display a loading indicator here
  }

  if (results.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <ul className="autocomplete-results">
      {results.map((result) => (
        <li
          key={result.properties.id}
          onClick={() => selectResult(result.properties.id)}
        >
          {result.properties.name}, {result.properties.context}
        </li>
      ))}
    </ul>
  );
};

export default AutocompleteResult;
