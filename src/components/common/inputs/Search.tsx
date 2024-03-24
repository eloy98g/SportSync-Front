import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Search as SearchIcon } from "lucide-react-native";

// Components
import Divider from "../Divider";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  onSearch: (T: any) => void;
  placeholder?: string;
}

const Search = ({ onSearch, placeholder }: Props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchIcon color={colors.black} size={18} />
      <Divider width={12} />
      <TextInput
        onChangeText={setSearch}
        placeholder={placeholder}
        value={search}
        style={styles.input}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 46,
  },
  input: {
    flex: 1,
    borderRadius: 10,
    fontFamily: family.normal,
    borderWidth: 0,
    fontSize: 18,
    textAlign: "left",
    color: colors.black,
    backgroundColor: colors.white,
  },
});
