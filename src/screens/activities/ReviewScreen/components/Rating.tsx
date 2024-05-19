import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Star } from "lucide-react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Title from "./Title";

// Theme
import colors from "../../../../theme/colors";

// Types
import Review from "../../../../store/types/review";

interface Props {
  rating: number | null;
  setReview: (T: any) => void;
}
const Rating = ({ rating, setReview }: Props) => {
  const ratingHandler = (number: number) => {
    setReview((prevState: Review) => ({ ...prevState, rating: number }));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => ratingHandler(i)}>
          <Star
            size={64}
            color={colors.primary}
            fill={rating && rating >= i ? colors.primary : colors.white}
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
