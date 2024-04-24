import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import CurrentActivity from "./CurrentActivity";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Theme
import colors from "../../../../theme/colors";
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

const CurrentActivitiesList = () => {
  const width = useWindowDimensions().width;
  const scrollWidth = width >= PHONE ? PHONE : width;
  const navigation = useNavigation();

  const activities = useAppSelector(
    (state) => state.activity.currentActivities
  );

  const activityHandler = (gid: number) => {
    navigation.navigate("ActivityDetail" as never, { gid } as never);
  };

  return (
    <View style={[styles.container, { maxWidth: scrollWidth }]}>
      <Text style={styles.title}>Tus próximas actividades</Text>
      <Divider height={12} />
      {activities.map((activity) => (
        <CurrentActivity
          key={activity.gid}
          data={activity}
          onPress={() => activityHandler(activity.gid)}
        />
      ))}
    </View>
  );
};

export default CurrentActivitiesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
  scroll: {
    alignItems: "flex-start",
  },
});
