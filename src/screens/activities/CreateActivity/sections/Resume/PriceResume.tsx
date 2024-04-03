import React, { useContext } from "react";

// Components
import Divider from "../../../../../components/common/Divider";
import Card from "../../../../../components/common/Card";
import ResumeText from "./ResumeText";

// Context
import CreateContext from "../../context/CreateContext";

// Utils
import getFormattedPrice from "../../../../../utils/currency/getFormattedPrice";

const PriceResume = () => {
  const { draft } = useContext(CreateContext);
  const { teams, playersPerTeam, price } = draft;

  const totalPlayers = teams * playersPerTeam;
  const priceCU = price ? getFormattedPrice(price / totalPlayers) : null;
  const priceText = priceCU ? "Cada jugador tendrá que pagar " + priceCU : "";

  const totalText =
    "El precio es de " +
    getFormattedPrice(price) +
    " entre " +
    totalPlayers +
    " jugadores.";

  if (price === 0) {
    return (
      <Card title="Precio">
        <ResumeText text={"Actividad gratuita"} />
      </Card>
    );
  }
  return (
    <Card title="Precio">
      <Divider height={6} />
      <ResumeText text={totalText} />
      <Divider height={12} />
      <ResumeText text={priceText} />
    </Card>
  );
};

export default PriceResume;
