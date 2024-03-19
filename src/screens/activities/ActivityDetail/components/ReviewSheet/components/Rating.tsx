import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Star } from "lucide-react-native";
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";
import Divider from "../../../../../../components/common/Divider";

const Rating = ({ rating, setReview }) => {
  const ratingHandler = (number: number) => {
    setReview((prevState: any) => ({ ...prevState, rating: number }));
  };

  console.log("rating", rating);
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
      <Text style={styles.text}>¿Cómo valorarías la experiencia?</Text>
      <Divider height={12}/>
      <View style={styles.row}>{renderStars()}</View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.grey,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
