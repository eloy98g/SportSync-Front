import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import ProfileHeader from "./components/ProfileHeader";
import Description from "./components/Description";
import Divider from "../../../components/common/Divider";
import Name from "./components/Name";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import { PHONE } from "../../../theme/breakPoints";

// Types
import User, { EMPTY_USER } from "../../../store/types/User";
import colors from "../../../theme/colors";

// Placeholders
import USER_1 from "../../../api/placeholders/USER_1";
import USER_2 from "../../../api/placeholders/USER_2";
import Information from "./components/Information";
import SportsContainer from "./components/SportsContainer";

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
        <View style={styles.info}>
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
          <SportsContainer userGid={userData.gid} />
        </View>
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
  },
  info: {
    width: "100%",
    alignItems: "center",
  },
});
