// Page de Notre équipe
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ViewTeam.scss";

function ViewTeam() {
  return (
    <div className="view-team">
      <h2 className="view-team-title">Notre équipe</h2>
      <div className="view-team-container">
        <div className="view-team-card">
          <div className="view-team-container-card">
            <img
              className="view-team-container-card-img"
              src="/images/Nicolas.png"
              alt="Nicolas"
            />
            <h3 className="view-team-container-card-title">Nicolas R</h3>
            <p className="view-team-container-card-text">
              {" "}
              <span className="view-team-role">Product Owner</span>, retrouvé à
              ce rôle car ayant eu une idée bancale de projet, il a plus un but
              de collaborateur auprès d’une équipe totalement autonome et
              bienveillante.
            </p>
          </div>
        </div>
        <div className="view-team-card">
          <div className="view-team-container-card">
            <img
              className="view-team-container-card-img"
              src="/images/Remi.png"
              alt="Remi"
            />
            <h3 className="view-team-container-card-title">Rémi G</h3>
            <p className="view-team-container-card-text">
              {" "}
              <span className="view-team-role">Lead Dev Back & Git Master</span>
              , double casquette car doté d’une polyvalence sans égale, sa tache
              consiste aussi bien à veiller à nos diverses coquilles durant les
              phases de merge (et oui Remi, il va y en avoir…) que de chapoter
              la mise en place du traitement des données.
            </p>
          </div>
        </div>
        <div className="view-team-card">
          <div className="view-team-container-card">
            <img
              className="view-team-container-card-img"
              src="/images/Franck.png"
              alt="Franck"
            />
            <h3 className="view-team-container-card-title">Franck A</h3>
            <p className="view-team-container-card-text">
              {" "}
              <span className="view-team-role">Référent Technique</span>, mordu
              de connaissance, il a la tache ardue de rendre possible le projet.
              Outre les idées réalisables (ou non), il permet d’apporter
              l’immensité du savoir nécessaire sur les différents outils utilisé
              dans ce projet.
            </p>
          </div>
        </div>
        <div className="view-team-card">
          <div className="view-team-container-card">
            <img
              className="view-team-container-card-img"
              src="/images/Charlotte.png"
              alt="Charlotte"
            />
            <h3 className="view-team-container-card-title">Charlotte G</h3>
            <p className="view-team-container-card-text">
              {" "}
              <span className="view-team-role">Scrum Master</span>, la
              WonderWomen de notre justice league, tout particulièrement à
              l’aise dans l’approche visuelle, elle a mis en place l’univers
              graphique de notre projet.
            </p>
          </div>
        </div>
        <div className="view-team-card">
          <div className="view-team-container-card">
            <img
              className="view-team-container-card-img"
              src="/images/Romain.png"
              alt="Romain"
            />
            <h3 className="view-team-container-card-title">Romain </h3>
            <p className="view-team-container-card-text">
              {" "}
              <span className="view-team-role">Lead Dev Front</span>. Confrontés
              à l'immensité de notre projet, nous avons recueilli un jeune
              poussin tombé du nid. Nouvelle recrue qui, au final, a réussi à
              concrétiser les idées folles de l'équipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTeam;
