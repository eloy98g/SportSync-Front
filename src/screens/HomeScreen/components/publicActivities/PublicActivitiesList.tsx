import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import PublicActivity from "./PublicActivity";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Theme
import colors from "../../../../theme/colors";
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";

const PublicActivitiesList = () => {
  const width = useWindowDimensions().width;
  const scrollWidth = width >= PHONE ? PHONE : width;

  const activities = useAppSelector((state) => state.activity.publicActivities);

  return (
    <View style={[styles.container, { maxWidth: scrollWidth }]}>
      <View style={{ paddingLeft: 12 }}>
        <Text style={styles.title}>Te puede interesar...</Text>
      </View>
      <Divider height={12} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <Divider width={12} />
        {activities.map((activity) => (
          <React.Fragment key={activity.gid}>
            <PublicActivity {...activity} />
            <Divider width={16} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default PublicActivitiesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontFamily: family.bold,
    fontSize: 12,
    color: colors.grey,
  },
  scroll: {
    alignItems: "flex-start",
  },
});
