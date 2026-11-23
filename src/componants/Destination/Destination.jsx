import styles from "./Destination.module.css";
import { useState } from "react";


function Destination(props) {
  // Les useState doivent être ICI, juste après l'accolade de Destination
  const [afficher, setAfficher] = useState(false);
  const [favoris, setFavoris] = useState("🤍");

  function toggleFavoris() {
    if (favoris === "🤍") {
      setFavoris("🩷");
    } else {
      setFavoris("🤍");
    }
  }

  function swap() {
    setAfficher(!afficher);
  }


  return (
    <div className={styles.destination}>
      <img
        src={props.image}
        alt={props.nom}
        className={styles.image}
      />
      <h2 className={styles.titre}>{props.nom}</h2>
      <p className={styles.pays}>{props.pays}</p>

      {afficher && <p className={styles.description}>{props.description}</p>}

      <button onClick={swap}>
        {afficher ? "Masquer la description" : "Afficher la description"}
      </button>

      {/* Bouton pour afficher et changer le cœur favori */}
      <button onClick={toggleFavoris}>
        {favoris}
      </button>

      <h3 className={styles.prix}>{props.prix} DT</h3>
    </div>
  );
}
export default Destination;