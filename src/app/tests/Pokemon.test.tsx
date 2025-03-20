import { render, screen, waitFor } from "@testing-library/react";
import PokemonCard from "../components/pokemonCard";

describe("Pokemon Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockPokemon = {
    name: "Bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  };

  test("renders Pokemon name", async () => {
    render(<PokemonCard pokemon={mockPokemon} key={1} />);
    await waitFor(() =>
      expect(screen.getByText("Bulbasaur")).toBeInTheDocument()
    );
  });

  test("contains a valid href property", async () => {
    render(<PokemonCard pokemon={mockPokemon} key={1} />);
    const linkElement = screen.getByText("Bulbasaur").closest("a");
    await waitFor(() =>
      expect(linkElement).toHaveAttribute(
        "href",
        "https://pokeapi.co/api/v2/pokemon/1/"
      )
    );
  });
});
