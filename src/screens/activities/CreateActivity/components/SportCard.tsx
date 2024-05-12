import { Circle, Star } from "lucide-react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Components
import Loading from "../../../../components/Status/Loading";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  image: string;
  name: string;
  gid: string;
  onPress: (T: string) => void;
  selected?: boolean;
  favorite?: boolean;
  loading?: boolean;
}

const SportCard = ({
  image,
  name,
  gid,
  onPress,
  selected,
  favorite,
  loading = false,
}: Props) => {
  const clickHandler = () => {
    onPress(gid);
  };

  console.log('loading',loading)
  return (
    <TouchableOpacity onPress={clickHandler}>
      <ImageBackground style={styles.container} source={{ uri: image }}>
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
        </View>
        {favorite && (
          <View style={styles.favWrapper}>
            {loading ? (
              <Loading />
            ) : (
              <Star fill={colors.primary} color={colors.primary} size={24} />
            )}
          </View>
        )}
        {selected && (
          <View style={styles.favWrapper}>
            {<Circle fill={colors.primary} color={colors.primary} size={24} />}
          </View>
        )}
        <View style={styles.opacity} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 12,
    overflow: "hidden",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 12,
    zIndex: 3,
  },
  selected: { borderWidth: 2, borderColor: colors.primary },
  title: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.white,
  },
  favWrapper: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 4,
  },
  opacity: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.3,
  },
});
