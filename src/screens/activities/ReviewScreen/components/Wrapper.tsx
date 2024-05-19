import React from "react";
import { StyleSheet, View, ScrollView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../../../../components/common/Divider";
import BackHeader from "../../../../components/BackHeader";
import Screen from "../../../../components/common/Screen";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <BackHeader title="¡Deja una valoración!" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {children}
          <Divider height={80} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    fontSize: 24,
    color: colors.black,
    paddingBottom: Platform.OS === "android" ? 3 : 0,
  },
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
