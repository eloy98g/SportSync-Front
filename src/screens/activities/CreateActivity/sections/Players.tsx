import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import SectionContainer from "../components/SectionContainer";
import NumericSelector from "../components/NumericSelector";
import Divider from "../../../../components/common/Divider";

// Context
import CreateContext from "../context/CreateContext";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

const Players = () => {
  const { draft, setDraft } = useContext(CreateContext);

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

  return (
    <SectionContainer>
      <View style={styles.content}>
        <Text style={styles.title}>Equipos</Text>
        <Divider height={12} />
        <NumericSelector
          onAdd={addTeam}
          onRemove={removeTeam}
          quantity={draft.teams}
        />
        <Divider height={40} />
        <Text style={styles.title}>Jugadores por equipo</Text>
        <Divider height={12} />
        <NumericSelector
          onAdd={addPlayer}
          onRemove={removePlayers}
          quantity={draft.playersPerTeam}
        />
      </View>
    </SectionContainer>
  );
};

export default Players;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: family.normal,
    fontSize: 28,
    color: colors.black,
  },
});
