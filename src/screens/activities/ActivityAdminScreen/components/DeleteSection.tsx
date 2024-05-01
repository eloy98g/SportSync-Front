import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";
import ErrorModal from "../../CreateActivity/components/ErrorModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

// Hooks
import useNavigate from "../../../../hooks/useNavigate";
import useStatus from "../../../../hooks/useStatus";

// Services
import Api from "../../../../services/api";

// Theme
import colors from "../../../../theme/colors";

// Types
import Activity from "../../../../store/types/activity/Activity";

interface Props {
  activity: Activity;
}

const DeleteSection = ({ activity }: Props) => {
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");
  const [error, setError] = useState("");

  const { navigateTo } = useNavigate();

  const deleteHandler = () => {
    setModal("Delete");
  };

  const deleteAction = async () => {
    try {
      setStatus("loading");
      const response = await Api.activity.remove(activity.gid);
      if (response.status === "success") {
        setStatus("success");
        navigateTo("Home");
      } else {
        setModal("Error");
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setModal("Error");
      setStatus("error");
      setError(error.message);
    }
  };

  return (
    <>
      <Label text="Otras acciones" />
      <Divider height={12} />
      <View style={styles.buttonWrapper}>
        <MainButton
          title="Eliminar actividad"
          onPress={deleteHandler}
          textColor={colors.red}
          color={colors.white}
          borderColor={colors.red}
        />
      </View>
      <ConfirmDeleteModal
        visible={modal === "Delete"}
        onFinish={deleteAction}
        setVisible={setModal}
        status={status}
      />
      <ErrorModal
        visible={modal === "Error"}
        setVisible={setModal}
        error={error}
      />
    </>
  );
};

export default DeleteSection;

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 46,
    width: "100%",
  },
});
