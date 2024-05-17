import React, { useState } from "react";
import {
  View,
  TextInput as Input,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import { Eye, EyeOff } from "lucide-react-native";

interface Props {
  onChange: (T: any) => void;
  value: string;
  placeholder?: string;
  error?: boolean;
  secure?: boolean;
  numeric?: boolean;
}

const PasswordInput = ({
  onChange,
  numeric,
  value,
  placeholder,
  error,
}: Props) => {
  const [secure, setSecure] = useState(true);
  const borderColor = error ? colors.red : colors.grey;

  const secureHandler = () => {
    setSecure(!secure);
  };

  return (
    <View style={[styles.container, { borderColor }]}>
      <Input
        keyboardType={numeric ? "numeric" : "default"}
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={secureHandler}>
        {secure ? (
          <Eye size={24} color={colors.grey} />
        ) : (
          <EyeOff size={24} color={colors.grey} />
        )}
      </TouchableOpacity>
    </View>
  );
};

PasswordInput.defaultProps = {
  placeholder: "",
  error: false,
  secure: false,
  numeric: false,
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 46,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
    textAlign: "left",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
