import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";
import getHour from "../../../../utils/date/getHour";

interface Props {
  data: Activity;
  onPress: (T: any) => void;
}

const CurrentActivity = ({ onPress, data }: Props) => {
  const { sport, name, type, startDate } = data;

  const nameText = name?.length > 0 ? name : sport.name;

  const date = unixToDate(startDate);
  const hour = getHour(startDate);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: sport.icons.black }} />
      <Divider width={8} />
      <View style={{ width: 30 }}>
        {type === "competitive" && (
          <>
            <Icon icon={type} color={colors.black} size={16} />
            <Divider width={8} />
          </>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.name}>
          {nameText}
        </Text>
      </View>
      <Divider width={8} />
      <Text style={styles.typeText}>
        {hour}     {date}
      </Text>
    </TouchableOpacity>
  );
};

export default CurrentActivity;

CurrentActivity.defaultProps = {
  showButton: true,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingRight: 6,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontFamily: family.semibold,
    color: colors.black,
  },
  typeText: {
    fontSize: 16,
    fontFamily: family.semibold,
    color: colors.grey,
  },
});
