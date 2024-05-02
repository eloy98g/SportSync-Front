import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import TextLineDivider from "../ActivityDetail/components/Teams/TextDivider";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import BackHeader from "../../../components/BackHeader";
import DeleteButton from "./components/DeleteButton";
import Team from "./components/Team";

// Types
import Activity from "../../../store/types/activity/Activity";
import Player from "../../../store/types/activity/Player";
import TeamT from "../../../store/types/activity/Team";
import colors from "../../../theme/colors";
import useStatus from "../../../hooks/useStatus";
import Api from "../../../services/api";

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

const DeletePlayersScreen = ({ route }: RouteProps) => {
  const { activity, setActivity } = route.params;
  const { status, setStatus } = useStatus();
  const { teams } = activity;
  const [screenTeams, setScreenTeams] = useState(teams);
  const [playerList, setPlayerList] = useState<SelectedPlayer[]>([]);

  const showButton = playerList.length > 0;

  const numTeams = teams.length;
  const firstTeam = numTeams > 0 ? teams[0] : null;
  const secondTeam = numTeams > 1 ? teams[1] : null;

  // const apiCall = async (newTeams: TeamT[]) => {
  //   try {
  //     setStatus("loading");
  //     const object = { teams: newTeams };
  //     const response = Api.activity.updateTeams(object, activity.gid);
  //     if(response)
  //   } catch (error) {}
  // };
 
  const swapHandler = () => {
    const firstTeam = screenTeams[0].name;

    const secondTeam = numTeams === 2 ? screenTeams[1]?.name : null;

    const playersToFirstTeam = secondTeam
      ? playerList.filter((p) => p.team === secondTeam)
      : null;

    const playersToSecondTeam = playerList.filter((p) => p.team === firstTeam);

    const newFirstTeam = screenTeams[0].players.filter(
      (player) => !playersToSecondTeam.some((p) => p.gid === player.gid)
    );

    let newSecondTeam: Player[] = [];
    if (secondTeam) {
      newSecondTeam = screenTeams[1].players.filter(
        (player) => !playersToFirstTeam?.some((p) => p.gid === player.gid)
      );
    }

    const updatedFirstTeam = {
      ...screenTeams[0],
      players: [...newFirstTeam],
    };

    const updatedSecondTeam = secondTeam
      ? {
          ...screenTeams[1],
          players: [...newSecondTeam],
        }
      : null;

    const newTeams = [updatedFirstTeam, updatedSecondTeam] as TeamT[];

    // setPlayerList([]);
    // setScreenTeams(newTeams);
    // setActivity((prevState) => {
    //   return { ...prevState, teams: [...newTeams] };
    // });
  };

  return (
    <Screen>
      <BackHeader title="Eliminar jugadores" />
      <Divider height={80} />
      <View style={styles.content}>
        {firstTeam && (
          <Team
            data={screenTeams[0]}
            playerList={playerList}
            setPlayerList={setPlayerList}
            selectionColor={colors.red}
          />
        )}
        {secondTeam && <TextLineDivider />}
        {secondTeam && (
          <Team
            data={screenTeams[1]}
            playerList={playerList}
            setPlayerList={setPlayerList}
            selectionColor={colors.red}
          />
        )}
      </View>
      {showButton && <DeleteButton onPress={swapHandler} />}
    </Screen>
  );
};

export default DeletePlayersScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
});
