import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../../../components/common/MainButton";

// Components
import Screen from "../../../components/common/Screen";
import Container from "./components/Container";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

const AuthScreen = () => {
  return (
    <Screen>
      <Container>
        <Hero />
        <MainSection />
      </Container>
    </Screen>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
