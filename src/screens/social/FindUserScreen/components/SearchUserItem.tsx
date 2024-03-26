import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../components/common/buttons/IconButton";
import Divider from "../../../../components/common/Divider";

// Types
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Store
import UserSearch from "../../../../store/types/user/UserSearch";

interface Props {
  data: UserSearch;
}

const SearchUserItem = ({ data }: Props) => {
  const { image, name, verified, followed, gid } = data;

  const [following, setFollowing] = useState(followed);
  const navigation = useNavigation();

  const followHandler = () => {
    setFollowing((prevState) => !prevState);
    // TODO: api call for following an user
  };

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
      <IconButton
        onPress={followHandler}
        borderStyle={{
          radius: 40,
          color: colors.primary,
        }}
        padding
        textStyle={styles.buttonText}
        distance={0}
        text={following ? "Dejar de seguir" : "Seguir"}
      />
    </View>
  );
};

export default SearchUserItem;

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
  buttonText: {
    fontFamily: family.bold,
    color: colors.primary,
    fontSize: 12,
  },
});
