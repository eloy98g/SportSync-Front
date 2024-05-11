import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Settings, BadgeAlert, PenLine, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import ReportSheet from "../../../../../components/Report/ReportSheet";
import Divider from "../../../../../components/common/Divider";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";

// Reducers
import { logOut } from "../../../../../store/features/user/userSlice";
import { family } from "../../../../../theme/fonts";
import { followPlayer } from "../../../../../store/features/following/followingSlice";
import Player from "../../../../../store/types/activity/Player";
import User from "../../../../../store/types/user/User";

interface Props {
  isExternal: boolean;
  data: User;
}

const ActionsGroup = ({ isExternal, data }: Props) => {
  const { gid, name, image } = data;
  const [openReportSheet, setOpenReportSheet] = useState(false);

  const navigation = useNavigation();

  const following = useAppSelector((state) => state.following.following);
  const isFollowing = following.some((player) => player.gid === gid);
  
  const dispatch = useAppDispatch();

  const reportHandler = () => {
    setOpenReportSheet(true);
  };

  const followHandler = () => {
    dispatch(followPlayer({ gid, name, image } as Player));
  };

  const logoutHandler = () => {
    dispatch(logOut());
    navigation.navigate("Home" as never);
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
            padding
            textStyle={styles.text}
            distance={0}
            text={isFollowing ? "Dejar de seguir" : "Seguir"}
          />
          <Divider width={10} />
          <IconButton
            onPress={reportHandler}
            icon={<BadgeAlert size={24} color={colors.white} />}
          />
        </>
      ) : (
        <IconButton
          onPress={logoutHandler}
          icon={<LogOut size={24} color={colors.white} />}
        />
      )}
      <ReportSheet
        open={openReportSheet}
        setOpen={setOpenReportSheet}
        userGid={gid}
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
