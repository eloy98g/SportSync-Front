import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import FilteredActivity from "./FilteredActivity";

// Context
import SearchContext from "../context/SearchContext";

const ActivitiesList = () => {
  const { filteredActivities } = useContext(SearchContext);

  return (
    <ScrollView style={styles.scroll}>
      <Divider height={12} />
      {filteredActivities.map((activity) => (
        <React.Fragment key={activity.gid}>
          <FilteredActivity {...activity} />
          <Divider height={12} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: 1,
    paddingHorizontal: 12,
  },
});
