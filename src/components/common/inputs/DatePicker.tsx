import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import unixToDate from "../../../utils/date/unixToDate";

interface Props {
  setValue: (T: Date) => void;
  value: number;
  placeholder?: string;
}

const DatePicker = ({ value, setValue, placeholder }: Props) => {
  const [visible, setVisible] = useState(false);
  const title = unixToDate(value) || placeholder;

  const handleConfirm = (value: Date) => {
    setValue(value);
  };

  const visibilityHandler = () => {
    setVisible((prevState: boolean) => !prevState);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={visibilityHandler}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={visibilityHandler}
      />
    </>
  );
};

DatePicker.defaultProps = {
  placeholder: "Selecciona una fecha",
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 46,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
  },
});
