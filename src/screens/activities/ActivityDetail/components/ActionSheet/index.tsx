import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import ReportSheet from "../../../../../components/Report/ReportSheet";
import Divider from "../../../../../components/common/Divider";
import Sheet from "../../../../../components/common/Sheet";

// Hooks
import useNavigate from "../../../../../hooks/useNavigate";
import { useAppSelector } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import Player from "../../../../../store/types/activity/Player";
import Activity from "../../../../../store/types/activity/Activity";
import PROFILE_IMAGE from "../../../../../constants/PROFILE_IMAGE";

interface Props {
  user: Player;
  open: boolean;
  data: Activity;
  setOpen: (T: boolean) => void;
}

const ActionSheet = ({ user, open, data, setOpen }: Props) => {
  const [openReport, setOpenReport] = useState(false);
  const { navigateTo } = useNavigate();
  const userGid = useAppSelector((state) => state.user.user.gid);
  const { image, name, gid } = user;

  const externalUser = userGid !== gid;

  const profileHandler = () => {
    setOpen(false);
    navigateTo("Profile", { gid: gid });
  };

  const reportHandler = () => {
    setOpenReport(true);
    setOpen(false);
  };
  const reviewHandler = () => {
    setOpen(false);
    navigateTo("Review", { userGid, selectedUser: user, data });
  };

  const chatHandler = () => {
    setOpen(false);
    navigateTo("Chat", { chatId: gid });
  };

  return (
    <Sheet open={open} openHandler={setOpen} modal>
      <Divider width={12} />
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: image || PROFILE_IMAGE }} />
        <Divider width={20} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        {externalUser && (
          <>
            <MainButton
              color={colors.white}
              textColor={colors.red}
              borderColor={colors.red}
              title="Reportar"
              height={40}
              onPress={reportHandler}
            />
            <Divider width={10} />
            <MainButton
              color={colors.white}
              textColor={colors.primary}
              title="Valorar"
              height={40}
              onPress={reviewHandler}
            />
            <Divider width={10} />
            <MainButton
              color={colors.white}
              height={40}
              textColor={colors.primary}
              title="Chat"
              onPress={chatHandler}
            />
            <Divider width={10} />
          </>
        )}
        <MainButton
          color={colors.white}
          textColor={colors.primary}
          height={40}
          title="Ver perfil"
          onPress={profileHandler}
        />
      </View>
      <ReportSheet open={openReport} setOpen={setOpenReport} userGid={gid} />
    </Sheet>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.bold,
    fontSize: 14,
    color: colors.grey,
  },
});
