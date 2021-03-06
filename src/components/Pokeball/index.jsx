import React from "react";
import "./styles.scss";

export default function Pokeball() {
  return (
    <div className="pokeball">
      <div className="pokeball-pokemon">
        <img src={require("../../assets/158Totodile.png").default} alt="" />
      </div>
    </div>
  );
}
