import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";

const MainActions = () => {
  const navigation = useNavigation();

  const editHandler = () => {
    navigation.navigate("EditProfile" as never);
  };

  const followersHandler = () => {
    navigation.navigate("FollowersScreen" as never);
  }

  const followingHandler = () => {
    navigation.navigate("FollowingScreen" as never);
  }

  return (
    <View style={styles.row}>
      <MainButton
        title="Seguidos"
        onPress={followingHandler}
        color={colors.white}
        textColor={colors.primary}
        height={36}
      />
      <Divider width={12} />
      <MainButton
        title="Seguidores"
        onPress={followersHandler}
        color={colors.white}
        textColor={colors.primary}
        height={36}
      />
      <Divider width={12} />
      <MainButton
        title="Editar Perfil"
        onPress={editHandler}
        color={colors.white}
        textColor={colors.primary}
        height={36}
      />
    </View>
  );
};

export default MainActions;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    height: 32,
    flexDirection: "row",
  },
});
