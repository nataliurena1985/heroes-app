import React from "react";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm({ searchText: "" });

  const { searchText } = formValues;
  const heroesFileted = getHeroesByName("ALGO");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };
  return (
    <>
      <h1>Busquedas</h1>

      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-2" type="submit">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {heroesFileted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
