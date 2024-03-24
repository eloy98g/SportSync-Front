import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import PublicActivitiesList from "./components/publicActivities/PublicActivitiesList";
import CurrentActivitiesList from "./components/currentActivities/CurrentActivitiesList";
import Screen from "../../components/common/Screen";
import Divider from "../../components/common/Divider";
import HomeSection from "./components/HomeSection";
import Header from "../../components/Header";

// Sections
import SECTIONS from "./sections";

// Theme
import { PHONE } from "../../theme/breakPoints";
import Version from "../../components/Version";
import QuickActions from "./components/sections/QuickActions";
import SocialActions from "./components/sections/SocialActions";
import OtherActions from "./components/sections/OtherActions";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.content}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Header />
          <PublicActivitiesList />
          <Divider height={20} />
          <CurrentActivitiesList />
          <Divider height={20} />
          <QuickActions />
          <Divider height={20} />
          <SocialActions />
          <Divider height={20} />
          <OtherActions />
          <Divider height={50} />
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
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    maxWidth: PHONE,
    height: 1,
  },
});

export default HomeScreen;
