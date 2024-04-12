import React from "react";
import { View } from "react-native";
import { Swords } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const ChangeTeams = ({ data, setActivity }: Props) => {
  const navigation = useNavigation();
  const teamsHandler = () => {
    navigation.navigate(
      "ModifyTeamScreen" as never,
      {
        activity: data,
        setActivity,
      } as never
    );
  };

  if (data.teams.length !== 2) {
    return <View />;
  }

  return (
    <>
      <Label text="Equipos" />
      <Divider height={8} />
      <TouchableInfo
        icon={<Swords size={24} color={colors.black} />}
        title={"Modificar equipos"}
        onPress={teamsHandler}
      />
    </>
  );
};

export default ChangeTeams;
