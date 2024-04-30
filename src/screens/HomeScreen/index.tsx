import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import PublicActivitiesList from "./components/publicActivities/PublicActivitiesList";
import CurrentActivitiesList from "./components/currentActivities/CurrentActivitiesList";
import QuickActions from "./components/sections/QuickActions";
import SocialActions from "./components/sections/SocialActions";
import Screen from "../../components/common/Screen";
import Divider from "../../components/common/Divider";
import Version from "../../components/Version";
import Header from "../../components/Header";

// Theme
import { PHONE } from "../../theme/breakPoints";

const HomeScreen = () => {
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
