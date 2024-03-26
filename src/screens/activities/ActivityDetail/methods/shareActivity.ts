import { Share, Alert } from "react-native";

// Utils
import getDateWithDuration from "../../../../utils/date/getDateWithDuration";

// Activity
import Activity from "../../../../store/types/Activity";

// Todo: create Share component
const shareActivity = async (data : Activity) => {
  const { startDate, duration, name, description } = data;
  const date = getDateWithDuration(startDate, duration);
  try {
    const result = await Share.share({
      title: name,
      message: `*${name}*\n\n\n📅 ${date}\n\n💬 ${description}\n\n🔗 https://eloygomez.dev/`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

export default shareActivity;
