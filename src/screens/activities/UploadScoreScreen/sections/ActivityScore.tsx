import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import MessageModal from "../../../../components/modals/MessageModal";
import Divider from "../../../../components/common/Divider";
import ScoreInput from "../components/ScoreInput";
import Error from "../../../../components/Status/Error";
import Teams from "../../ActivityDetail/components/Teams";

// Hooks
import useStatus from "../../../../hooks/useStatus";
import useNavigate from "../../../../hooks/useNavigate";

// Methods
import initialiceScore from "../methods/initialiceScore";

// Services
import Api from "../../../../services/api";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Score from "../../../../store/types/activity/Score";

interface Props {
  activity: Activity;
}

const ActivityScore = ({ activity }: Props) => {
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const [modal, setModal] = useState("");
  const [slotValues, setSlotsValues] = useState<Score[]>(
    initialiceScore(activity)
  );
  const { navigateTo } = useNavigate();

  const buttonActive = slotValues.every((slot) => slot.points !== null);

  const scoreHandler = async () => {
    try {
      setStatus("loading");
      const response = await Api.activity.createResult(
        activity.gid,
        {scores: slotValues}
      );
      if (response.status === "success") {
        setStatus("success");
        setModal("Success");
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  const acceptHandler = () => {
    navigateTo("Home");
  };

  if (!activity) {
    return <Error error="Error al cargar la actividad" />;
  }

  return (
    <View>
      <Teams activity={activity} />
      <Divider height={48} />
      <ScoreInput
        teams={activity.teams}
        slotValues={slotValues}
        setSlotsValues={setSlotsValues}
      />
      <Divider height={48} />
      <View style={styles.buttonWrapper}>
        <MainButton
          title="Aceptar"
          onPress={scoreHandler}
          loading={status === "loading"}
          active={buttonActive}
        />
      </View>
      <View style={styles.errorContainer}>
        <Error error={error} />
      </View>
      <MessageModal
        visible={modal === "Success"}
        message="Resultado creado correctamente"
        onFinish={acceptHandler}
        setVisible={setModal}
      />
    </View>
  );
};

export default ActivityScore;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
    height: 46,
  },
  errorContainer: {
    width: "100%",
    height: 46,
  },
});
