import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";

// Components
import Divider from "../../../components/common/Divider";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";
import { family } from "../../../theme/fonts";

type SIZE = "small" | "normal" | "large-x" | "large-y" | "xl";

interface Props {
  size: SIZE;
  title: string;
  subtitle?: string;
  image: ImageSourcePropType;
  filter?: boolean;
  marginBottom?: number;
  onPress?: () => void
}

const ActionButton = ({
  size,
  title,
  subtitle,
  image,
  filter = true,
  marginBottom,
  onPress
}: Props) => {
  const width = useWindowDimensions().width;
  const getSizeStyles = () => {
    const gap = 20;

    const itemWidth = width >= PHONE ? PHONE / 2 - gap : width / 2 - gap;

    switch (size) {
      case "small":
        return { width: itemWidth, height: itemWidth / 2 };
      case "normal":
        return { width: itemWidth - gap, height: itemWidth - gap };
      case "large-x":
        return { width: itemWidth, height: itemWidth * 2 - gap };
      case "large-y":
        return { width: itemWidth * 2 + 10, height: itemWidth };
      case "xl":
        return { width: itemWidth * 2, height: itemWidth * 2 };
      default:
        return { width: itemWidth, height: itemWidth };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, getSizeStyles(), { marginBottom }]}
      onPress={onPress}
    >
      <ImageBackground style={styles.background} source={image}>
        {filter && <View style={styles.opacity} />}
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
