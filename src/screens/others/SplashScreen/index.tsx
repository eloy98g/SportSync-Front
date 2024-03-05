import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Components
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// Reducers
import fetchCurrentActivities from "../../../store/features/activity/methods/fetchCurrentActivities";
import fetchPublicActivities from "../../../store/features/activity/methods/fetchPublicActivities";
import fetchChats from "../../../store/features/chat/methods/fetchChats";
// Theme
import colors from "../../../theme/colors";

const SplashScreen = ({ navigation }: any) => {
  const stateUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const loggedIn = !!stateUser.gid;

  const getData = async () => {
    dispatch(fetchCurrentActivities());
    dispatch(fetchPublicActivities());
    dispatch(fetchChats());
  };

  const splashHandler = async () => {
    await getData();
    setTimeout(() => {
      navigation.navigate(loggedIn ? "Home" : "Auth");
    }, 1000);
  };

  useEffect(() => {
    splashHandler();
  }, []);

  return (
    <Screen>
      <Text>SplashupScreen</Text>
      <ActivityIndicator size="small" color={colors.primary} />
    </Screen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
