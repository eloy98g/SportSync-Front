import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../../../components/common/Divider";

// Context
import { SportContainerContext } from "../context/SportContainerContext";
import Activity from "../../../../../../components/activities/Activity";

const ActivitiesList = () => {
  const { activities, selectedSport } = useContext(SportContainerContext);
  const currentActivities = activities.filter(
    (act) => act.sport.gid === selectedSport
  );
  return (
    <View style={styles.container}>
      {currentActivities.map((item) => (
        <React.Fragment key={item.gid}>
          <Activity data={item} />
          <Divider height={12} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
