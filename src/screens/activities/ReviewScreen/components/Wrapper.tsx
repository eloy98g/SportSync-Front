import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../../../../components/common/Divider";

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
    <View style={styles.container}>
      <Divider height={12} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity onPress={backHandler} style={styles.row}>
            <ArrowLeft strokeWidth={3} size={24} color={colors.black} />
          </TouchableOpacity>
          <Divider width={12} />
          <Text style={styles.title}>¡Deja una valoración!</Text>
        </View>
        {children}
        <Divider height={80} />
      </ScrollView>
    </View>
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
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
