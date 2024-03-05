import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Screen from "../../components/common/Screen";
import Divider from "../../components/common/Divider";
import HomeSection from "./components/HomeSection";

// Sections
import SECTIONS from "./sections";

// Theme
import { PHONE } from "../../theme/breakPoints";
import PublicActivitiesList from "./components/publicActivities/PublicActivitiesList";

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.content}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Divider height={20}/>
          <PublicActivitiesList />
          <Divider height={20} />
          {SECTIONS.map((section, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <Divider height={20} />}
              <HomeSection title={section.title} data={section.data} />
            </React.Fragment>
          ))}
          <Divider height={100} />
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
  },
});

export default HomeScreen;
