import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../common/Divider";

// Theme
import colors from "../../theme/colors";
import { PHONE } from "../../theme/breakPoints";
import { family } from "../../theme/fonts";

interface Props {
  backAction?: () => void;
  title?: string;
  showShadow?: boolean;
  onBack?: () => void;
}

const BackHeader = ({
  backAction = () => {},
  title,
  showShadow = true,
  onBack,
}: Props) => {
  const navigation = useNavigation();

  const backHandler = () => {
    if (onBack) {
      onBack();
    } else {
      backAction();
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, showShadow && styles.shadow]}>
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

BackHeader.defaultProps = {
  onBack: () => {},
  backAction: () => {},
};
export default BackHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 10,
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "rgba(0,0,0,0,4)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    height: 80,
    paddingTop: 40,
  },
  row: { flexDirection: "row", alignItems: "center" },
  text: {
    fontFamily: family.semibold,
    color: colors.black,
    fontSize: 24,
  },
});
