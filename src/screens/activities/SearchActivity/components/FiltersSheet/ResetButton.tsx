import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";

// Context
import SearchContext from "../../context/SearchContext";
import { INITIAL_FILTERS } from "../../context/initialState";

// Theme
import colors from "../../../../../theme/colors";

const ResetButton = () => {
  const { setFilters } = useContext(SearchContext);

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };
  return (
    <View style={styles.container}>
      <MainButton
        title="Resetear filtros"
        onPress={resetFilters}
        textColor={colors.red}
        borderColor={colors.red}
        color={colors.white}
      />
    </View>
  );
};

export default ResetButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 46,
    paddingHorizontal: 24,
  },
  button: {
    width: 1,
  },
  text: {},
});
