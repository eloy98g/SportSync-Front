import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import AuthSheet from "./components/AuthSheet";
import Container from "./components/Container";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

// Sections
import ForgotPassword from "./sections/ForgotPassword";
import LogIn from "./sections/LogIn";
import SignIn from "./sections/SignIn";

const AuthScreen = ({ navigation }: any) => {
  const [section, setSection] = useState<any>();

  const sectionComponents: any = {
    ForgotPassword: <ForgotPassword setSection={setSection} />,
    LogIn: <LogIn setSection={setSection} navigation={navigation} />,
    SignIn: <SignIn setSection={setSection} />,
  };

  return (
    <Screen>
      <StatusBar hidden backgroundColor={"rgba(0,0,0,0.87)"} />
      <Container>
        <Hero />
        <MainSection setSection={setSection} />
        <AuthSheet section={section} setSection={setSection}>
          {sectionComponents[section]}
        </AuthSheet>
      </Container>
    </Screen>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
