import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

// Components
import List from "./List";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

interface Props {
  value: any;
  setValue: any;
  placeholder: string;
  data?: any;
}

const Select = ({ value, setValue, data, placeholder }: Props) => {
  const [selectWidth, setSelectWidth] = useState(0);

  const [opened, setOpened] = useState(false);
  const selectHandler = () => {
    setOpened(!opened);
  };

  const itemHandler = (val: any) => {
    setValue(val);
    setOpened(false);
  };

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setSelectWidth(width);
  };

  const title = value || placeholder;
  const icon = opened ? (
    <ChevronUp color={colors.black} size={14} />
  ) : (
    <ChevronDown color={colors.black} size={14} />
  );

  return (
    <View>
      <TouchableOpacity
        onLayout={onLayout}
        onPress={selectHandler}
        style={[
          styles.titleWrapper,
          opened && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        {icon}
      </TouchableOpacity>
      {opened && <List data={data} itemHandler={itemHandler} width={selectWidth}/>}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  titleWrapper: {
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
  title: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
  },
});
