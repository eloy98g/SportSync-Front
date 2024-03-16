import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import Divider from "../../../../../components/common/Divider";
import Sheet from "../../../../../components/common/Sheet";
import { useAppSelector } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  user: any;
  open: boolean;
  setOpen: (T: any) => void;
}

const ActionSheet = ({ user, open, setOpen }: Props) => {
  const navigation = useNavigation();
  const userGid = useAppSelector((state) => state.user.user.gid);
  const { image, name, gid } = user;

  const externalUser = userGid !== gid;

  const profileHandler = () => {
    setOpen(false);
    navigation.navigate("Profile" as never, { gid: gid } as never);
  };

  const reviewHandler = () => {};
  const chatHandler = () => {};

  return (
    <Sheet open={open} openHandler={setOpen} height={150}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: image }} />
        <Divider width={20} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <MainButton
          color={colors.white}
          textColor={colors.primary}
          height={40}
          title="Ver perfil"
          onPress={profileHandler}
        />
        {externalUser && (
          <>
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
          </>
        )}
      </View>
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
