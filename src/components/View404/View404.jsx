// Page 404
import React from 'react';
import { Link } from "react-router-dom";

//styles
import './View404.scss';

function pageNotFound() {
  return (
    <div className="page-not-found">
      <img className='image-404' src="/images/404.png" alt="404" />
      <p className='p-404'>Vous pouvez retourner à l'accueil en cliquant <Link to="/">ici</Link>.</p>
    </div>
  );
}

export default pageNotFound;