import { useQuery } from "react-query";

export type Feature = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    label: string;
    score: number;
    housenumber?: string;
    id: string;
    name: string;
    postcode: string;
    citycode: string;
    x: number;
    y: number;
    city: string;
    context: string;
    type: string;
    importance?: number;
    street?: string;
  };
};

export type AutocompleteResponse = {
  type: string;
  version: string;
  features: Feature[];
  attribution: string;
  licence: string;
  query: string;
  limit: number;
};

const fetchSuggestions = async (
  query: string,
  maxResults: number
): Promise<Feature[]> => {
  if (!query || query.length < 3) {
    return [];
  }

  const response = await fetch(
    `http://api-adresse.data.gouv.fr/search/?q=${query}&limit=${maxResults}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: AutocompleteResponse = await response.json();
  return data.features;
};

export const useAutocomplete = (
  query: string | undefined,
  maxResults: number = 5
) => {
  return useQuery<Feature[], Error>(
    ["autocomplete", query, maxResults],
    () => fetchSuggestions(query || "", maxResults),
    {
      enabled: !!query && query.length >= 3,
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    }
  );
};
