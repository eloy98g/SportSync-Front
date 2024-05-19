import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import Review from "../../../../store/types/review";
import useStatus from "../../../../hooks/useStatus";
import Api from "../../../../services/api";
import ErrorModal from "../../../../components/modals/ErrorModal";
import MessageModal from "../../../../components/modals/MessageModal";

interface Props {
  review: Review;
}
const Actions = ({ review }: Props) => {
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const [modal, setModal] = useState("");
  const navigation = useNavigation();

  const cancelHandler = () => {
    navigation.goBack();
  };

  const acceptHandler = async () => {
    setStatus("loading");

    const validateReview = () => {
        if (review.users.length === 0) {
            return "Debes seleccionar al menos a un usuario";
        }
        if (review.rating === null) {
            return "Debes seleccionar una valoración";
        }
        return null;
    };

    const validationError = validateReview();
    if (validationError) {
        setError(validationError);
        setStatus("error");
        setModal("Error");
        return;
    }

    try {
        const response = await Api.review.create(review);
        console.log("response", response);

        if (response.status === "success") {
            setStatus("success");
            setModal("Success");
        } else {
            throw new Error(response.message);
        }
    } catch (error: any) {
        console.error("Error creating review", error);
        setStatus("error");
        setError(error.message || "Ocurrió un error inesperado");
        setModal("Error");
    }
};

  const finishHandler = () => {
    setModal("");
    navigation.goBack();
  };

  return (
    <View style={styles.row}>
      <MainButton
        title="Cancelar"
        onPress={cancelHandler}
        borderColor={colors.primary}
        color={colors.white}
        textColor={colors.primary}
      />
      <Divider width={20} />
      <MainButton
        title="Aceptar"
        onPress={acceptHandler}
        color={colors.primary}
        textColor={colors.white}
        loading={status === "loading"}
      />
      <ErrorModal
        visible={modal === "Error"}
        setVisible={setModal}
        error={error}
      />
      <MessageModal
        visible={modal === "Success"}
        setVisible={setModal}
        message={"Valoración creada con éxito"}
        onFinish={finishHandler}
      />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
