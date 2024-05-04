import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Inbox } from "lucide-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// Theme
import colors from "../../../theme/colors";

// Hooks
import { useAppSelector } from "../../../hooks";

const RequestsIcon = () => {
  const numChats = useAppSelector((state) => state.chat.chat).length;
  const navigation = useNavigation();

  const getData = async () => {
    console.log("requesting requests");
  };
  
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  const requestsHandler = () => {
    navigation.navigate("RequestActivitiesList" as never);
  };
  return (
    <TouchableOpacity onPress={requestsHandler}>
      {numChats > 1 && <View style={styles.dot} />}
      <Inbox color={colors.primary} size={25} />
    </TouchableOpacity>
  );
};

export default RequestsIcon;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    top: 2,
    right: 1,
    backgroundColor: colors.red,
    zIndex: 2,
  },
});
