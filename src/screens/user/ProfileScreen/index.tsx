import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Components
import Screen from "../../../components/common/Screen";
import ProfileHeader from "./components/ProfileHeader";
import Description from "./components/Description";
import Divider from "../../../components/common/Divider";
import Information from "./components/Information";
import SportsContainer from "./components/SportsContainer";
import MainActions from "./components/MainActions";
import Name from "./components/Name";
import Loading from "../../../components/Status/Loading";
import Error from "../../../components/Status/Error";

// Context
import { SportContainerProvider } from "./components/SportsContainer/context/SportContainerContext";

// Hooks
import { useAppSelector } from "../../../hooks";

// Services
import Api from "../../../services/api";

// Theme
import { PHONE } from "../../../theme/breakPoints";
import { family } from "../../../theme/fonts";

// Types
import User from "../../../store/types/user/User";
import colors from "../../../theme/colors";



const ProfileScreen = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const [userData, setUserData] = useState<User>();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const gid = route.params?.gid;

  const isExternal = userGid !== gid;
  const verified =
    (userData?.phoneVerified && userData?.emailVerified) || false;

  const getData = async () => {
    try {
      if (!gid) {
        setStatus("error");
        setError("No user id provided");
      } else {
        setStatus("loading");
        const response = await Api.user.getById(gid);
        if (response.status === "success") {
          setUserData(response.data);
          setStatus("success");
        } else {
          setStatus("error");
          setError(response.message);
        }
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [gid])
  );

  if (status === "success" && userData) {
    return (
      <Screen>
        <ProfileHeader data={userData} isExternal={isExternal} />
        <View style={styles.content}>
          <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
            <Divider height={220} />
            <Name name={userData.name} verified={verified} />
            <Divider height={10} />
            <Description description={userData.description} />
            <Divider height={28} />
            {!isExternal && <MainActions />}
            <Divider height={28} />
            <Information data={userData} />
            <Divider height={28} />
            <SportContainerProvider userGid={userData.gid}>
              <SportsContainer />
            </SportContainerProvider>
            <Divider height={80} />
          </ScrollView>
        </View>
      </Screen>
    );
  }

  if (status === "loading" || status === "idle") {
    return <Loading />;
  }

  return <Error error={error} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    maxWidth: PHONE,
    paddingHorizontal: 12,
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
