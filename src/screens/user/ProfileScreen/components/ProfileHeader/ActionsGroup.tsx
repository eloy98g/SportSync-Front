import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Settings, BadgeAlert, PenLine, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import ReportSheet from "../../../../../components/Report/ReportSheet";
import Divider from "../../../../../components/common/Divider";

// Hooks
import { useAppDispatch } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";

// Reducers
import { logOut } from "../../../../../store/features/user/userSlice";
import { family } from "../../../../../theme/fonts";

interface Props {
  isExternal: boolean;
  userGid: number;
}

const ActionsGroup = ({ isExternal, userGid }: Props) => {
  const [openReportSheet, setOpenReportSheet] = useState(false);

  // TODO: logic for getting followers
  const [following, setFollowing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const settingHandler = () => {};

  const reportHandler = () => {
    setOpenReportSheet(true);
  };

  const followHandler = () => {
    setFollowing((prev) => !prev);
  };
  const logoutHandler = () => {
    dispatch(logOut());
    navigation.navigate("Home" as never);
  };

  const editHandler = () => {
    navigation.navigate("EditProfile" as never);
  };

  return (
    <View style={styles.group}>
      {isExternal ? (
        <>
          <IconButton
            onPress={followHandler}
            borderStyle={{
              radius: 40,
              color: colors.white,
            }}
            textStyle={styles.text}
            distance={0}
            text={following ? "Dejar de seguir" : "Seguir"}
          />
          <IconButton
            onPress={reportHandler}
            icon={<BadgeAlert size={24} color={colors.white} />}
          />
        </>
      ) : (
        <>
          <IconButton
            onPress={editHandler}
            icon={<PenLine size={24} color={colors.white} />}
          />
          <Divider width={10} />
          <IconButton
            onPress={settingHandler}
            icon={<Settings size={24} color={colors.white} />}
          />
          <Divider width={10} />
          <IconButton
            onPress={logoutHandler}
            icon={<LogOut size={24} color={colors.white} />}
          />
        </>
      )}
      <ReportSheet
        open={openReportSheet}
        setOpen={setOpenReportSheet}
        userGid={userGid}
      />
    </View>
  );
};

export default ActionsGroup;

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: family.bold,
    color: colors.white,
    fontSize: 12,
  },
});
