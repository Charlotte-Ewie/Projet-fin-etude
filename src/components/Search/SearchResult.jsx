// Page de Recherche de vétérinaire
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavorite, addFavorite } from "../../actions/user";
import "./Search.scss";
import "./SearchResult.scss";

function SearchResult({ searchResult }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.user);

  const [isAnimated, setIsAnimated] = useState(
    searchResult === null ? "" : Array(searchResult.length).fill(false)
  );
  return (
    <div className="result">
      <section className="result-veterinary">
        {searchResult == null && (
          <p className="badSearch">Recherche infructueuse</p>
        )}
        {searchResult != null &&
          searchResult.map((item, i) => (
            <div
              className="result-veterinary-search"
              key={`favourite-veterinary--${i}`}
            >
              {favorites.some(
                (favorite) => favorite.veterinary_id === item.veterinary_id
              ) && (
                <button
                  className="btn-favorite"
                  onClick={() => {
                    dispatch(deleteFavorite(item.veterinary_id));
                  }}
                >
                  <img
                    src="/icons/heart-red.svg"
                    alt="favorite-icon"
                    className={isAnimated[i] ? "heart-animation" : "heart-icon"}
                  />
                </button>
              )}
              {!favorites.some(
                (favorite) => favorite.veterinary_id === item.veterinary_id
              ) && (
                <button
                  className="btn-favorite"
                  onClick={() => {
                    dispatch(addFavorite(item.veterinary_id));
                    const updatedAnimationState = [...isAnimated];
                    updatedAnimationState[i] = true;
                    setIsAnimated(updatedAnimationState);
                  }}
                >
                  <img
                    src="/icons/heart-white.svg"
                    alt="favorite-icon"
                    className="heart-icon"
                  />
                </button>
              )}
              <img
                className="avatar"
                src="../../../public/images/Doc.png"
                alt="doc"
              />
              <div className="result-category">
                <h3>NOM</h3>
                <p className="avatar-name">{item.lastname}</p>
                <p className="avatar-name">{item.firstname}</p>
              </div>
              <div className="result-category">
                <h3>ADRESSE</h3>
                <p className="account-description">{item.address}</p>
                <p className="account-description">
                  {item.zip_code} - {item.city}
                </p>
              </div>
              <div className="result-category">
                <h3>PAIEMENTS</h3>
                <p className="account-description">{item.payment_modes}</p>
              </div>
              <div className="result-category">
                <h3>CONTACT</h3>
                <p className="account-description">{item.email}</p>
                <p className="account-description">
                  {item.phone_number.replace(/(\d{2})(?=\d{2})/g, "$1 ")}
                </p>
              </div>
              <div className="result-category">
                <h3>HORAIRE</h3>
                <p className="account-description">{item.opening_hour}</p>
                <p className="account-description">{item.closing_hour}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default SearchResult;
