import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import SectionContainer from "../components/SectionContainer";
import NumericSelector from "../components/NumericSelector";
import Divider from "../../../../components/common/Divider";
import TextInput from "../../../../components/common/inputs/TextInput";

// Context
import CreateContext from "../context/CreateContext";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Utils
import getFormattedPrice from "../../../../utils/currency/getFormattedPrice";

const Players = () => {
  const { draft, setDraft } = useContext(CreateContext);
  const [price, setPrice] = useState<string>("");
  const { teams, playersPerTeam } = draft;

  const totalPlayers = teams * playersPerTeam;
  const priceCU = price
    ? getFormattedPrice((parseFloat(price) * 100) / totalPlayers)
    : null;
  const priceText = priceCU
    ? "Cada deportista tendrá que pagar " + priceCU
    : "";

  const addTeam = () => {
    setDraft((prevState) => ({ ...prevState, teams: prevState.teams + 1 }));
  };

  const removeTeam = () => {
    setDraft((prevState) =>
      prevState.teams > 1
        ? { ...prevState, teams: prevState.teams - 1 }
        : prevState
    );
  };

  const addPlayer = () => {
    setDraft((prevState) => ({
      ...prevState,
      playersPerTeam: prevState.playersPerTeam + 1,
    }));
  };

  const removePlayers = () => {
    setDraft((prevState) =>
      prevState.playersPerTeam > 1
        ? { ...prevState, playersPerTeam: prevState.playersPerTeam - 1 }
        : prevState
    );
  };

  const priceHandler = (e: string) => {
    const newPrice = e.replace(/[,.]/g, ".");
    setPrice(newPrice);
    setDraft((prevState) => ({
      ...prevState,
      price: parseFloat(newPrice) * 100,
    }));
  };

  return (
    <SectionContainer>
      <View style={styles.content}>
        <Text style={styles.title}>Equipos</Text>
        <Divider height={12} />
        <NumericSelector
          onAdd={addTeam}
          onRemove={removeTeam}
          quantity={teams}
        />
        <Divider height={40} />
        <Text style={styles.title}>Jugadores por equipo</Text>
        <Divider height={12} />
        <NumericSelector
          onAdd={addPlayer}
          onRemove={removePlayers}
          quantity={playersPerTeam}
        />
        <Divider height={40} />
        <Text style={styles.title}>Precio</Text>
        <Text style={styles.subtitle}>
          ¿El partido o la actividad tiene algún coste?
        </Text>
        <Divider height={12} />
        <View style={styles.priceContainer}>
          <TextInput
            value={price}
            placeholder={"0"}
            onChange={priceHandler}
            numeric
          />
        </View>
        <Divider height={12} />
        {priceText && <Text style={styles.subtitle}>{priceText}</Text>}
      </View>
    </SectionContainer>
  );
};

export default Players;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: family.normal,
    fontSize: 28,
    color: colors.black,
  },
  subtitle: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.grey,
  },
  priceContainer: {
    width: "100%",
    maxWidth: 250,
  },
});
