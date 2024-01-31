import {
  describe,
  expect,
  it,
  beforeAll,
  afterEach,
  afterAll,
} from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAutocomplete } from "./useAutocomplete";
// import { http, HttpResponse } from "msw";
// import { setupServer } from "msw/node";

const mockResponse = {
  type: "FeatureCollection",
  version: "draft",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.514863, 48.844839],
      },
      properties: {
        label: "20 Rue Victor Basch 94360 Bry-sur-Marne",
        score: 0.9638363636363635,
        housenumber: "20",
        id: "94015_9610_00020",
        name: "20 Rue Victor Basch",
        postcode: "94360",
        citycode: "94015",
        x: 664395.87,
        y: 6860641.91,
        city: "Bry-sur-Marne",
        context: "94, Val-de-Marne, Île-de-France",
        type: "housenumber",
        importance: 0.6022,
        street: "Rue Victor Basch",
      },
    },
  ],
  attribution: "BAN",
  licence: "ETALAB-2.0",
  query: "20 rue victor basch bry sur marne",
  limit: 2,
};

// const server = setupServer(
//   http.get("http://api-adresse.data.gouv.fr/search", () => {
//     return HttpResponse.json(mockResponse);
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
//

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useAutocomplete", () => {
  it("should return empty array when query is too short", async () => {
    const { result } = renderHook(() => useAutocomplete("ab", 5), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));

    expect(result.current.data).toEqual([]);
  });

  it("should fetch suggestions correctly", async () => {
    const { result } = renderHook(() => useAutocomplete("paris", 5), {
      wrapper,
    });

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.data).toEqual(mockResponse.features);
  });
});
