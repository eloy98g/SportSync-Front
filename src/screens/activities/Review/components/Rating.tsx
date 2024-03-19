import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Star } from "lucide-react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Title from "./Title";

// Theme
import colors from "../../../../theme/colors";

const Rating = ({ rating, setReview }: any) => {
  const ratingHandler = (number: number) => {
    setReview((prevState: any) => ({ ...prevState, rating: number }));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => ratingHandler(i)}>
          <Star
            size={64}
            color={colors.primary}
            fill={rating >= i ? colors.primary : colors.white}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Title text="¿Cómo valorarías la experiencia?" />
      <Divider height={12} />
      <View style={styles.row}>{renderStars()}</View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
