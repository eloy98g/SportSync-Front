import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import Icon from "../../../../../components/common/Icon";
import TouchableInfo from "./TouchableInfo";

// Theme
import colors from "../../../../../theme/colors";
import InfoSheet from "./InfoSheet";
import AccessInfo from "../../../../../components/tutorial/AccessInfo";

const index = ({ data }: any) => {
  const [sheet, setSheet] = useState("");
  const { access, type } = data;

  const accessHandler = () => setSheet("Access");

  const typeHandler = () => setSheet("Ranked");

  const accessText =
    access === "public" ? "Actividad pública" : "Actividad privada";

  const typeText =
    type === "normal"
      ? "Esta partida no influirá a tu nivel"
      : "Las partidas competitivas influyen en tu nivel";

  console.log("sheet", sheet);
  return (
    <View style={styles.container}>
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
      <Divider height={18} />
      <TouchableInfo
        icon={<Icon icon={type} size={24} color={colors.black} />}
        title={typeText}
        onPress={typeHandler}
      />
      <InfoSheet open={sheet === "Access"} setOpen={setSheet}>
        <AccessInfo />
      </InfoSheet>
      <InfoSheet open={sheet === "Ranked"} setOpen={setSheet}>
        <AccessInfo />
      </InfoSheet>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
