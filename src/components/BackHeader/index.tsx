import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../common/Divider";

// Theme
import colors from "../../theme/colors";
import { PHONE } from "../../theme/breakPoints";
import { family } from "../../theme/fonts";

const BackHeader = ({ onBack = () => {}, title }: any) => {
  const navigation = useNavigation();

  const backHandler = () => {
    onBack();
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={backHandler} style={styles.row}>
          <ArrowLeft size={24} color={colors.black} />
          <Divider width={10} />
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 10,
    shadowColor: "rgba(0,0,0,0,4)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: "white",
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    height: 50,
    paddingTop: 10,
  },
  row: { flexDirection: "row", alignItems: "center" },
  text: {
    fontFamily: family.semibold,
    color: colors.black,
    fontSize: 24,
  },
});
