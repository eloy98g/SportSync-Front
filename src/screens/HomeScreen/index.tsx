import React, { useCallback } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Components
import PublicActivitiesList from "./components/publicActivities/PublicActivitiesList";
import CurrentActivitiesList from "./components/currentActivities/CurrentActivitiesList";
import QuickActions from "./components/sections/QuickActions";
import SocialActions from "./components/sections/SocialActions";
import Screen from "../../components/common/Screen";
import Divider from "../../components/common/Divider";
import Version from "../../components/Version";
import Header from "../../components/Header";

// Hooks
import { useAppDispatch, useAppSelector } from "../../hooks";

// Store
import fetchPublicActivities from "../../store/features/activity/methods/fetchPublicActivities";
import fetchCurrentActivities from "../../store/features/activity/methods/fetchCurrentActivities";
import fetchChats from "../../store/features/chat/methods/fetchChats";

// Theme
import { PHONE } from "../../theme/breakPoints";

const HomeScreen = () => {
  const stateUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const getData = async () => {
    await dispatch(fetchPublicActivities());

    if (!stateUser.gid) return;

    dispatch(fetchChats());
    dispatch(fetchCurrentActivities(stateUser.gid));
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <Screen>
      <View style={styles.content}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Header />
          <PublicActivitiesList />
          <CurrentActivitiesList />
          <QuickActions />
          <Divider height={20} />
          <SocialActions />
          <Divider height={20} />
          <Version />
          <Divider height={80} />
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    maxWidth: PHONE,
    height: 1,
  },
});

export default HomeScreen;
