import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import TextLineDivider from "../ActivityDetail/components/Teams/TextDivider";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import BackHeader from "../../../components/BackHeader";
import SwapButton from "./components/SwapButton";
import Team from "./components/Team";

// Types
import Activity from "../../../store/types/activity/Activity";
import Player from "../../../store/types/activity/Player";
import TeamT from "../../../store/types/activity/Team";
import useStatus from "../../../hooks/useStatus";
import Api from "../../../services/api";
import ErrorModal from "../../../components/modals/ErrorModal";

interface RouteProps {
  route: {
    params: {
      activity: Activity;
      setActivity: React.Dispatch<React.SetStateAction<Activity>>;
    };
  };
}

export interface SelectedPlayer extends Player {
  team: string;
}

const ModifyTeamScreen = ({ route }: RouteProps) => {
  const { activity, setActivity } = route.params;
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");
  const [error, setError] = useState("");

  const { teams } = activity;
  const [screenTeams, setScreenTeams] = useState(teams);
  const [playerList, setPlayerList] = useState<SelectedPlayer[]>([]);

  const showButton = playerList.length > 0;

  const postNewTeams = async (newTeams: TeamT[]) => {
    try {
      setStatus("loading");
      const teams = newTeams.map((team) => {
        const gidsJugadores = team.players.map((player) => player.gid);
        return {
          gid: team.gid,
          name: team.name,
          players: gidsJugadores,
        };
      });
      const object = { teams: teams };
      const response = await Api.activity.updateTeams(object, activity.gid);
      if (response.status === "success") {
        setStatus("success");
        return true;
      } else {
        setStatus("error");
        setError(response.message);
        setModal("Error");
        return false;
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
      setModal("Error");
      return false;
    }
  };

  const swapHandler = async () => {
    const firstTeam = screenTeams[0].name;
    const secondTeam = screenTeams[1].name;

    const playersToFirstTeam = playerList.filter((p) => p.team === secondTeam);
    const playersToSecondTeam = playerList.filter((p) => p.team === firstTeam);

    const newFirstTeam = screenTeams[0].players.filter(
      (player) => !playersToSecondTeam.some((p) => p.gid === player.gid)
    );
    const newSecondTeam = screenTeams[1].players.filter(
      (player) => !playersToFirstTeam.some((p) => p.gid === player.gid)
    );

    const updatedFirstTeam = {
      ...screenTeams[0],
      players: [...newFirstTeam, ...playersToFirstTeam],
    };
    const updatedSecondTeam = {
      ...screenTeams[1],
      players: [...newSecondTeam, ...playersToSecondTeam],
    };

    const newTeams = [updatedFirstTeam, updatedSecondTeam] as TeamT[];
    const result = await postNewTeams(newTeams);

    if (result) {
      setPlayerList([]);
      setScreenTeams(newTeams);
      setActivity((prevState) => {
        return { ...prevState, teams: [...newTeams] };
      });
    }
  };

  return (
    <Screen>
      <BackHeader title="Modificar equipos" />
      <Divider height={80} />
      <View style={styles.content}>
        <Team
          data={screenTeams[0]}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
        <TextLineDivider />
        <Team
          data={screenTeams[1]}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
      </View>
      {showButton && <SwapButton onPress={swapHandler} status={status} />}
      <ErrorModal
        visible={modal === "Error"}
        setVisible={setModal}
        error={error}
      />
    </Screen>
  );
};

export default ModifyTeamScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
});
