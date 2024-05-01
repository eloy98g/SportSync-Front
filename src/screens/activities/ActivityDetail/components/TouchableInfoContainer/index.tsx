import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import AccessInfo from "../../../../../components/tutorial/AccessInfo";
import RankedInfo from "../../../../../components/tutorial/RankedInfo";
import Divider from "../../../../../components/common/Divider";
import Icon from "../../../../../components/common/Icon";
import TouchableInfo from "./TouchableInfo";
import InfoSheet from "./InfoSheet";

// Theme
import colors from "../../../../../theme/colors";

// Types
import Activity from "../../../../../store/types/activity/Activity";
import VisibilityInfo from "../../../../../components/tutorial/VisibilityInfo";

interface Props {
  data: Activity;
}

const TouchableInfoContainer = ({ data }: Props) => {
  const [sheet, setSheet] = useState<string | boolean>("");
  const { visibility, type, access } = data;

  const sheetHandler = (type: string) => setSheet(type);

  const visibilityText =
    visibility === "public" ? "Actividad pública" : "Actividad privada";

  const accessText = visibility === "public" ? "Abierta" : "Cerrada";

  const typeText =
    type === "normal"
      ? "Esta partida no influirá a tu nivel"
      : "Las partidas competitivas influyen en tu nivel";

  return (
    <View style={styles.container}>
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={() => sheetHandler("Access")}
      />
      <Divider height={18} />
      <TouchableInfo
        icon={<Icon icon={visibility} size={24} color={colors.black} />}
        title={visibilityText}
        onPress={() => sheetHandler("Visibility")}
      />
      <Divider height={18} />
      <TouchableInfo
        icon={<Icon icon={type} size={24} color={colors.black} />}
        title={typeText}
        onPress={() => sheetHandler("Type")}
      />
      <InfoSheet open={sheet === "Visibility"} setOpen={setSheet}>
        <VisibilityInfo />
      </InfoSheet>
      <InfoSheet open={sheet === "Access"} setOpen={setSheet}>
        <AccessInfo />
      </InfoSheet>
      <InfoSheet open={sheet === "Type"} setOpen={setSheet}>
        <RankedInfo />
      </InfoSheet>
    </View>
  );
};

export default TouchableInfoContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
