import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../components/common/buttons/IconButton";

// Types
import Activity from "../../../../store/types/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";
import Divider from "../../../../components/common/Divider";

const CurrentActivity = (props: Activity) => {
  const { sport, name, type, startDate, gid } = props;
  const navigation = useNavigation();

  const typeText = type === "competitive" ? "Competitiva" : "normal";
  const date = unixToDate(startDate);

  const activityHandler = () => {
    navigation.navigate("ActivityDetail" as never, { gid } as never);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={activityHandler}>
      <Image style={styles.image} source={{ uri: sport.icon }} />
      <Divider width={10}/>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={{ width: 70 }}>
        <Text style={styles.typeText}>{typeText}</Text>
      </View>
      <View style={{ width: 70 }}>
        <Text style={styles.typeText}>{date}</Text>
      </View>
      <IconButton
        icon={<ArrowRight color={colors.grey} size={20} />}
        onPress={activityHandler}
      />
    </TouchableOpacity>
  );
};

export default CurrentActivity;

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
