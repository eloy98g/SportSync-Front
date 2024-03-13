import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import ProfileHeader from "./components/ProfileHeader";
import Description from "./components/Description";
import Divider from "../../../components/common/Divider";
import Information from "./components/Information";
import SportsContainer from "./components/SportsContainer";
import Name from "./components/Name";

// Context
import { SportContainerProvider } from "./components/SportsContainer/context/SportContainerContext";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import { PHONE } from "../../../theme/breakPoints";
import { family } from "../../../theme/fonts";

// Types
import User, { EMPTY_USER } from "../../../store/types/User";
import colors from "../../../theme/colors";

// Placeholders
import USER_1 from "../../../api/placeholders/USER_1";
import USER_2 from "../../../api/placeholders/USER_2";

const ProfileScreen = ({ route }: any) => {
  const user = useAppSelector((state) => state.user.user);
  const [userData, setUserData] = useState<User>(EMPTY_USER);
  const [status, setStatus] = useState("idle");
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const gid = route.params?.gid;
  console.log("userData", userData);
  const verified = userData.phoneVerified && userData.emailVerified;

  useEffect(() => {
    setStatus("loading");
    if (gid) {
      setUserData(USER_2);

      // TODO: Lógica para traerse los datos de un usuario
      setIsExternal(true);
    } else {
      setUserData(USER_1);
      setIsExternal(false);
    }
    setStatus("success");
  }, []);

  if (status === "loading" || status === "idle") {
    return (
      <Screen>
        <ActivityIndicator size="small" color={colors.primary} />
      </Screen>
    );
  }

  return (
    <Screen>
      <StatusBar backgroundColor={colors.primary} />
      <ProfileHeader data={userData} isExternal={isExternal} />
      <View style={styles.content}>
        <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
          <Name name={userData.name} verified={verified} />
          <Divider height={10} />
          <Description description={userData.description} />
          <Divider height={14} />
          <Divider height={1} width="100%" color={colors.lightenGrey} />
          <Divider height={14} />
          <Information data={userData} />
          <Divider height={14} />
          <Divider height={1} width="100%" color={colors.lightenGrey} />
          <Divider height={14} />
          <SportContainerProvider userGid={userData.gid}>
            <SportsContainer />
          </SportContainerProvider>
          <Divider height={80} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 220,
    height: 1,
  },
  info: {
    width: "100%",
    height: 1,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
