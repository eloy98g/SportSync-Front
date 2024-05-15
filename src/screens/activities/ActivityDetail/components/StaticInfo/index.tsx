import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { Files } from "lucide-react-native";

// Components
import Card from "../../../../../components/common/Card";
import Divider from "../../../../../components/common/Divider";
import Player from "../Teams/Player";
import Description from "./Description";
import Location from "./Location";

// Store
import Activity from "../../../../../store/types/activity/Activity";

// Theme
import { family } from "../../../../../theme/fonts";
import colors from "../../../../../theme/colors";

interface Props {
  data: Activity;
  playerView: boolean;
}

const StaticInfo = ({ data, playerView }: Props) => {
  const { description, admin, location, name, code } = data;

  const copyToClipboard = () => {
    Clipboard.setString(code.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <Card title="Información" border={false}>
        {name?.length > 0 ? <Description description={name} /> : <></>}
        {description?.length > 0 ? (
          <Description description={description} />
        ) : (
          <></>
        )}
      </Card>
      <Card title="Administrador" border={false}>
        <View style={styles.row}>
          <View style={styles.admin}>
            <Player data={admin} activityData={data} />
          </View>
          <Location location={location} />
        </View>
      </Card>
      {playerView && (
        <Card title="Código de la actividad" border={false}>
          <TouchableOpacity style={styles.codeRow} onPress={copyToClipboard}>
            <Text style={styles.code}>#{code.toUpperCase()}</Text>
            <Divider width={10} />
            <Files size={20} color={colors.primary} />
          </TouchableOpacity>
        </Card>
      )}
    </View>
  );
};

export default StaticInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  admin: {
    width: 75,
    paddingTop: 8,
  },
  row: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  codeRow: {
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  code: {
    fontFamily: family.bold,
    color: colors.primary,
    fontSize: 24,
  },
});
