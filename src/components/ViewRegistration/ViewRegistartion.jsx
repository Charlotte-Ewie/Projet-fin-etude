// Page vous êtes inscrit

// import
import React from 'react';
import { Link } from "react-router-dom";

//styles
import './ViewRegistration.scss';

function ViewRegistration() {
return (
  <div className="page-registration">
    <div className='card-registration'>
    <h2>Bienvenue par-minous !</h2>
      <div className='card-registration-content'>
      <p className='p-registration'>Vous êtes inscrit ! Vous pouvez maintenant vous connecter en cliquant <Link to="/">ici</Link>.</p>
      </div>
    </div>
    </div>
    
)}

export default ViewRegistration;