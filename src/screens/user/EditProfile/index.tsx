import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";

const EditProfile = () => {
  return (
    <Screen>
      <BackHeader title={"Editar perfil"} />
      <View style={styles.container}>
        <Text>edit</Text>
      </View>
    </Screen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 12,
  },
});
