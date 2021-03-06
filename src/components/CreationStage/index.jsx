import React from "react";
import "./styles.scss";

// Componentes
import Pokeball from "components/Pokeball";

export default function CreationStage() {
  return (
    <section className="creation-stage">
      <div className="creation-stage-wrapper">
        <div className="creation-stage-pokemon">
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
        </div>
        <div className="creation-stage-trainer"></div>
      </div>
    </section>
  );
}
