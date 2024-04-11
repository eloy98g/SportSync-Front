import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ArrowRight } from "lucide-react-native";

// Components
import IconButton from "../../../../components/common/buttons/IconButton";
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
  showButton: boolean;
}

const CurrentActivity = ({ onPress, data, showButton }: Props) => {
  const { sport, name, type, startDate } = data;

  const date = unixToDate(startDate);
  const hour = getHour(startDate);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: sport.icon }} />
      <Divider width={8} />
      {type === "competitive" && (
        <>
          <Icon icon={type} color={colors.black} size={16} />
          <Divider width={8} />
        </>
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Divider width={8} />
      <Text style={styles.typeText}>
        {hour} {date}
      </Text>
      <Divider width={8} />
      {showButton && (
        <IconButton
          icon={<ArrowRight color={colors.grey} size={20} />}
          onPress={onPress}
        />
      )}
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
