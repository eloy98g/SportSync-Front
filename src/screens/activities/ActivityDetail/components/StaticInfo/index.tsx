import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../../../../components/common/Card";
import getAdmin from "../../methods/getAdmin";
import Player from "../Teams/Player";
import Description from "./Description";
import Location from "./Location";

const StaticInfo = ({ data }: any) => {
  const { description, admin, teamPlayers, place } = data;

  const adminData = getAdmin(admin, teamPlayers);
  return (
    <View style={styles.container}>
      <Card title="Información" border={false}>
        <Description description={description} />
      </Card>
      <Card title="Administrador" border={false}>
        <View style={styles.row}>
          <View style={styles.admin}>
            <Player data={adminData} />
          </View>
          <Location place={place} />
        </View>
      </Card>
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
});
