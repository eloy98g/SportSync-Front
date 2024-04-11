import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import TypeSelector from "../../CreateActivity/components/TypeSelector";
import Divider from "../../../../components/common/Divider";
import Sheet from "../../../../components/common/Sheet";

// Types
import Activity, {
  ActivityAccess,
} from "../../../../store/types/activity/Activity";

interface Props {
  open: boolean;
  access: ActivityAccess;
  openHandler: React.Dispatch<React.SetStateAction<boolean>>;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const VisibilitySheet = ({ open, access, openHandler, setActivity }: Props) => {
  const visibilityHandler = () => {
    setActivity((prevState) => ({
      ...prevState,
      access: prevState.access === "private" ? "public" : "private",
    }));
  };

  return (
    <Sheet open={open} openHandler={openHandler}>
      <View style={styles.content}>
        <TypeSelector
          title={"Pública"}
          description={
            "Las actividades públicas son actividades abiertas a cualquier persona"
          }
          selected={access === "public"}
          onPress={visibilityHandler}
        />
         <Divider height={12} />
        <TypeSelector
          title={"Privada"}
          description={
            "Las actividades privadas son actividades sólo accesibles a usuarios con código o invitación"
          }
          selected={access === "private"}
          onPress={visibilityHandler}
        />
      </View>
    </Sheet>
  );
};

export default VisibilitySheet;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    paddingTop: 12
  },
});
