import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import ActionButton from "../ActionButton";
import HomeSection from "../HomeSection";

const SocialActions = () => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const paddingHorizontal = 24;
  const dividerSize = 20;
  const itemWidth = (width - paddingHorizontal) / 2 - 10;
  const largeHeight = itemWidth * 2 + dividerSize;

  const searchFriendHandler = () => {
    navigation.navigate("FindUserScreen" as never);
  };
  const createActivityHandler = () => {
    navigation.navigate("CreateActivity" as never);
  };

  const searchActivityHandler = () => {
    navigation.navigate("SearchActivity" as never);
  };

  return (
    <HomeSection title="Encuentra tu deporte">
      <View style={styles.container}>
        <View>
          <ActionButton
            width={itemWidth}
            height={itemWidth}
            title="Crear"
            image={require("../../../../assets/images/actionButtons/create.jpg")}
            onPress={createActivityHandler}
          />
          <Divider height={dividerSize} />
          <ActionButton
            width={itemWidth}
            height={itemWidth}
            title="Encuentra amigos"
            image={require("../../../../assets/images/actionButtons/addFriend.jpg")}
            onPress={searchFriendHandler}
          />
        </View>
        <Divider width={dividerSize} />
        <ActionButton
          width={itemWidth}
          height={largeHeight}
          title="Únete a otros jugadores"
          image={require("../../../../assets/images/actionButtons/find.jpg")}
          onPress={searchActivityHandler}
        />
      </View>
    </HomeSection>
  );
};

export default SocialActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
