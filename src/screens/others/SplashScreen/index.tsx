import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Components
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// Reducers
import fetchCurrentActivities from "../../../store/features/activity/methods/fetchCurrentActivities";
import fetchPublicActivities from "../../../store/features/activity/methods/fetchPublicActivities";

// Theme
import colors from "../../../theme/colors";

const SplashScreen = ({ navigation }: any) => {
  const stateUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const loggedIn = !!stateUser.gid;

  const getData = async () => {
    await dispatch(fetchCurrentActivities());
    await dispatch(fetchPublicActivities());
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      if (loggedIn) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Auth");
      }
    }, 1000);
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
