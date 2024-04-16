import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import TypeSelector from "../../CreateActivity/components/TypeSelector";
import Divider from "../../../../components/common/Divider";
import Sheet from "../../../../components/common/Sheet";

// Types
import Activity, {
  ActivityAccess,
  ActivityVisibility,
} from "../../../../store/types/activity/Activity";

interface Props {
  open: boolean;
  access: ActivityAccess;
  openHandler: React.Dispatch<React.SetStateAction<boolean>>;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const AccessSheet = ({ open, access, openHandler, setActivity }: Props) => {
  const accessHandler = () => {
    setActivity((prevState) => ({
      ...prevState,
      access: prevState.access === "open" ? "closed" : "open",
    }));
  };

  return (
    <Sheet open={open} openHandler={openHandler}>
      <View style={styles.content}>
        <TypeSelector
          title={"Abierta"}
          description={
            "Los usuarios se unirán sin necesidad de aprobación por parte del administrador."
          }
          selected={access === "open"}
          onPress={accessHandler}
        />
        <Divider height={12} />
        <TypeSelector
          title={"Cerrada"}
          description={
            "Cuando un usuario quiera unirse, te llegará una notificación y podrás adminitirlo o no."
          }
          selected={access === "closed"}
          onPress={accessHandler}
        />
      </View>
    </Sheet>
  );
};

export default AccessSheet;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    paddingTop: 12,
  },
});
