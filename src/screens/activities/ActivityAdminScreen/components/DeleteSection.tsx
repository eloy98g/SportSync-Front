import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";

// Hooks
import useStatus from "../../../../hooks/useStatus";
import colors from "../../../../theme/colors";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const DeleteSection = () => {
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");

  const navigation = useNavigation()

  const deleteHandler = () => {
    setModal("Delete");
  };
  const deleteAction = async () => {
    // TODO: api call for deleting an activity
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setModal("")
      navigation.goBack()
    }, 500);
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
