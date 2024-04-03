import React from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import SectionContainer from "../../components/SectionContainer";
import Title from "../../components/Title";
import SportResume from "./SportResume";
import TypeResume from "./TypeResume";
import TimeResume from "./TimeResume";

// Theme
import PriceResume from "./PriceResume";

const Resume = () => {
  return (
    <SectionContainer>
      <ScrollView style={styles.scroll}>
        <Divider height={24} />
        <Title title="Resumen" />
        <Divider height={12} />
        <SportResume />
        <Divider height={12} />
        <TypeResume />
        <Divider height={12} />
        <PriceResume />
        <Divider height={12} />
        <TimeResume />
      </ScrollView>
    </SectionContainer>
  );
};

export default Resume;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: 1,
  },
});
