import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SearchResult from "./SearchResult";

//Import API
import API from "../../api";
import NavBar from "../partials/NavBar/NavBar";

import search from "/public/images/search.png";

function Search() {
  const { token } = useSelector((state) => state.user);
  const [nameSearch, setNameSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  function handleChangeName(e) {
    setNameSearch(e.target.value);
  }

  function handleChangeCity(e) {
    setCitySearch(e.target.value);
  }
  const resultMerge = {};

  if (nameSearch !== "") {
    resultMerge.name = nameSearch;
  }

  if (citySearch !== "") {
    resultMerge.city = citySearch;
  }

  function handleSubmit(e) {
    e.preventDefault();
    API.search.axiosSearch(token, resultMerge).then((response) => {
      setSearchResult(response.data.searchResult);
      setIsSubmit(true);
    });
  }

  return (
    <>
      <div className="component-container">
        <NavBar />
        <div className="component-search">
          <div className="search-and-result">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                className="search-input-name"
                name="name"
                type="search"
                placeholder="Nom d'un praticien ?"
                onChange={handleChangeName}
              />
              <input
                className="search-input-city"
                name="city"
                type="search"
                placeholder="Ville ?"
                onChange={handleChangeCity}
              />

              <button type="submit" className="search-input-image">
                <img
                  src={search}
                  alt="logo"
                  className="search-input-image-logo"
                />
              </button>
            </form>
            {isSubmit && <SearchResult searchResult={searchResult} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
