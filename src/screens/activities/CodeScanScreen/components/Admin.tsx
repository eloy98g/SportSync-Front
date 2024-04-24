import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

// Components
import Card from "../../../../components/common/Card";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import Player from "../../../../store/types/activity/Player";

interface Props {
  admin: Player;
}

const Admin = ({ admin }: Props) => {
  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.playerContainer}>
          <Image style={styles.image} source={{ uri: admin.image }} />
          <Divider height={4} />
          <Text style={styles.name}>{admin.name}</Text>
        </View>
        <Divider width={20} />
        <Text style={styles.name}>Administrador</Text>
      </View>
    </Card>
  );
};

export default Admin;

const styles = StyleSheet.create({
  playerContainer: {
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.grey,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
