import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

// Components
import CurrentActivity from "../../../HomeScreen/components/currentActivities/CurrentActivity";
import Divider from "../../../../components/common/Divider";
import Card from "../../../../components/common/Card";

// Types
import Activity from "../../../../store/types/activity/Activity";

interface Props {
  setSelectedActivity: React.Dispatch<
    React.SetStateAction<Activity | undefined>
  >;
  data: Activity[];
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

const ActivitySelector = ({ setSelectedActivity, setSection, data }: Props) => {
  const activityHandler = (activity: Activity) => {
    setSelectedActivity(activity);
    setSection("score");
  };

  return (
    <View style={styles.content}>
      {data.map((activity) => (
        <React.Fragment key={activity.gid}>
          <Divider height={24} />
          <TouchableOpacity>
            <Card>
              <CurrentActivity
                data={activity}
                onPress={() => activityHandler(activity)}
                showButton={false}
              />
            </Card>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </View>
  );
};

export default ActivitySelector;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
