import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";

// Theme
import colors from "../../../../../theme/colors";

const BackButton = () => {
  const navigation = useNavigation();
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={backHandler}>
      <ArrowLeft size={24} color={colors.white} />
    </TouchableOpacity>
  );
};

export default BackButton;
