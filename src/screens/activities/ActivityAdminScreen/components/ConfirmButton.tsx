import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Hooks
import useStatus from "../../../../hooks/useStatus";

// Services
import Api from "../../../../services/api";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Types
import Activity from "../../../../store/types/activity/Activity";

interface Props {
  activity: Activity;
}

const ConfirmButton = ({ activity }: Props) => {
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  
  const navigation = useNavigation();

  const finishHandler = async () => {
    try {
      setStatus("loading");
      const body = {
        visibility: activity.visibility,
        access: activity.access,
        name: activity.name,
        description: activity.description,
      };
      const response = await Api.activity.update(body, activity.gid);
      console.log("response", JSON.stringify(response));
      if (response.status === "success") {
        setStatus("success");
        navigation.goBack();
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <MainButton
          title="Confirmar y guardar"
          onPress={finishHandler}
          loading={status === "loading"}
        />
      </View>
      {status === "error" && (
        <>
          <Divider height={12} />
          <Text style={styles.error}>{error}</Text>
        </>
      )}
    </View>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonWrapper: {
    height: 46,
    width: "100%",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.red,
  },
});
