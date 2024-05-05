import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Card from "../../../../../components/common/Card";
import Player from "../Teams/Player";
import Description from "./Description";
import Location from "./Location";

// Store
import Activity from "../../../../../store/types/activity/Activity";

interface Props {
  data: Activity;
}

const StaticInfo = ({ data }: Props) => {
  const { description, admin, location, name } = data;

  const descriptionText =
    description?.length > 0 ? description : "Sin descripción";
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
