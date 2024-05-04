import { Calendar, CalendarClock, Clock } from "lucide-react-native";
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import getHour from "../../../utils/date/getHour";

// Utils
import unixToDate from "../../../utils/date/unixToDate";

type MODE = "date" | "datetime" | "time";
interface Props {
  setValue: (T: Date) => void;
  value: number;
  placeholder?: string;
  mode?: MODE;
  minDate?: Date;
}

const DatePicker = ({ minDate, value, mode, setValue, placeholder }: Props) => {
  const [visible, setVisible] = useState(false);
  const title =
    mode === "time"
      ? getHour(value)
      : mode === "date"
      ? unixToDate(value)
      : "" || placeholder;

  const handleConfirm = (value: Date) => {
    setValue(value);
  };

  const visibilityHandler = () => {
    setVisible((prevState: boolean) => !prevState);
  };

  const icon =
    mode === "time" ? (
      <Clock color={colors.black} size={18} />
    ) : mode === "date" ? (
      <Calendar color={colors.black} size={18} />
    ) : (
      <CalendarClock color={colors.black} size={18} />
    );
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={visibilityHandler}>
        <Text style={styles.title}>{title}</Text>
        {icon}
      </TouchableOpacity>
      <DateTimePickerModal
        minimumDate={minDate}
        isVisible={visible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={visibilityHandler}
      />
    </>
  );
};

DatePicker.defaultProps = {
  placeholder: "Selecciona una fecha",
  mode: "date",
  minDate: new Date(),
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
