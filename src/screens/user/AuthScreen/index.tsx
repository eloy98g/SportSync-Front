import React, { useState } from "react";

// Components
import Screen from "../../../components/common/Screen";
import Sheet from "../../../components/common/Sheet";
import Container from "./components/Container";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

// Sections
import ForgotPassword from "./sections/ForgotPassword";
import LogIn from "./sections/LogIn";
import SignIn from "./sections/SignIn";

const AuthScreen = ({ navigation }: any) => {
  const [section, setSection] = useState<any>("LogIn");
  const [open, setOpen] = useState(false);

  const sectionComponents: any = {
    ForgotPassword: (
      <ForgotPassword setSection={setSection} setOpen={setOpen} />
    ),
    LogIn: (
      <LogIn
        setSection={setSection}
        navigation={navigation}
        setOpen={setOpen}
      />
    ),
    SignIn: (
      <SignIn
        setSection={setSection}
        setOpen={setOpen}
        navigation={navigation}
      />
    ),
  };

  return (
    <Screen>
      <Container>
        <Hero />
        <MainSection setSection={setSection} setOpen={setOpen} />
        <Sheet open={open} openHandler={setOpen} modal={false}>
          {sectionComponents[section]}
        </Sheet>
      </Container>
    </Screen>
  );
};

export default AuthScreen;
