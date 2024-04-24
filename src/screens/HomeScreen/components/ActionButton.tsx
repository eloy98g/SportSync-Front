import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

// Components
import Divider from "../../../components/common/Divider";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  title: string;
  subtitle?: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  width?: number;
  height?: number;
}

const ActionButton = ({
  title,
  subtitle,
  image,
  onPress,
  width,
  height,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { height, width }]}
      onPress={onPress}
    >
      <ImageBackground style={styles.background} source={image}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && (
            <>
              <Divider height={10} />
              <Text style={styles.subtitle}>{subtitle}</Text>
            </>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 1,
  },
  opacity: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundColor: colors.primary,
    opacity: 0.3,
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 12,
    zIndex: 3,
  },
  title: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.white,
  },
  subtitle: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.white,
  },
});
