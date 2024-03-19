import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import ReportSheet from "../../../../../components/Report/ReportSheet";
import Divider from "../../../../../components/common/Divider";
import Sheet from "../../../../../components/common/Sheet";

// Hooks
import { useAppSelector } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  user: any;
  open: boolean;
  data: any;
  setOpen: (T: any) => void;
}

const ActionSheet = ({ user, open, data, setOpen }: Props) => {
  const [openReport, setOpenReport] = useState(false);
  const navigation = useNavigation();
  const userGid = useAppSelector((state) => state.user.user.gid);
  const { image, name, gid } = user;

  const externalUser = userGid !== gid;

  const profileHandler = () => {
    setOpen(false);
    navigation.navigate("Profile" as never, { gid: gid } as never);
  };

  const reportHandler = () => {
    setOpenReport(true);
    setOpen(false);
  };
  const reviewHandler = () => {
    setOpen(false);
    navigation.navigate(
      "Review" as never,
      { userGid, selectedUser: user, data } as never
    );
  };

  const chatHandler = () => {
    setOpen(false);
    navigation.navigate("Chat" as never, { chatId: gid } as never);
  };

  return (
    <Sheet open={open} openHandler={setOpen} height={150}>
      <Divider width={12} />

      {/* TODO: Convert this component to Player.Horizontal */}
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: image }} />
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
