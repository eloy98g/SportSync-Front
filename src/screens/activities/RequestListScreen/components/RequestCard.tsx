import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import Player from "../../../../store/types/activity/Player";

interface Props {
  data: Player;
}

const RequestCard = ({ data }: Props) => {
  const { image, name, verified, gid } = data;
  const navigation = useNavigation();

  const accepRequest = async () => {};
  const rejectRequest = async () => {};

  const profileHandler = () => {
    navigation.navigate("Profile" as never, { gid: gid } as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={profileHandler}>
        <Image style={styles.image} source={{ uri: image }} />
        <Divider width={12} />
        <Text style={styles.name}>{name}</Text>
        <Divider width={12} />
        {verified && (
          <Image
            style={styles.verified}
            source={require("../../../../assets/images/verified.png")}
          />
        )}
      </TouchableOpacity>
      <View style={styles.actions}>
        <MainButton
          title="Rechazar"
          onPress={rejectRequest}
          borderColor={colors.red}
          textColor={colors.red}
          color={colors.white}
          height={28}
          fontSize={12}
        />
        <Divider width={12}/>
        <MainButton
          height={28}
          title="Aceptar"
          onPress={accepRequest}
          color={colors.white}
          textColor={colors.primary}
          fontSize={12}
        />
      </View>
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  verified: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
  },
  actions: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    maxWidth: 150,
  },
});
