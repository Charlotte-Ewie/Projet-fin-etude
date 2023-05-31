// Composant d'un vétérinaire favori

// import
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../../actions/user';
import './VeterinaryFavourite.scss';

function VeterinaryFavouriteItem() {
  const dispatch = useDispatch();
  const veterinary = useSelector((state) => state.user.favorites);

  return (
    <>
      <section className='veterinary-favourite-container'>
        <h2>Mes vétérinaires favoris 👤</h2>
        <ul className='favorite-list'>
          {veterinary.map((item, i) => (
            <li
              className="veterinary-favourite"
              key={`favourite-veterinary--${i}`}
            >
              <img
                className="avatar"
                src="../../../public/images/Doc.png"
                alt="doc"
              />
              <span className="avatar-name">{item.firstname} {item.lastname}</span>
              <hr />
              <div className='veterinary-categories'>
                <div className='veterinary-category'>
                  <h3>ADRESSE</h3>
                  <p className="account-description">{item.address}</p>
                  <p className="account-description">{item.zipcode} - {item.city}</p>
                </div>
                <hr />
                <div className='veterinary-category'>
                  <h3>MOYENS DE PAIEMENTS</h3>
                  <p className="account-description">{!item.payment_modes ? "non communiqué" : item.payment_modes}</p>
                </div>
                <hr />
                <div className='veterinary-category'>
                  <h3>CONTACT</h3>
                  <p className="account-description">{item.phone.replace(/(\d{2})(?=\d{2})/g, "$1 ")}</p>
                  <p className="account-description">{item.email}</p>
                </div>
              </div>

              <button className='button-subscribe' onClick={() => dispatch(deleteFavorite(item.veterinary_id))}> Supprimer le favori

              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default VeterinaryFavouriteItem;