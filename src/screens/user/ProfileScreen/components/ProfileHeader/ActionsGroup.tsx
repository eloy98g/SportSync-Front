import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Settings, BadgeAlert, PenLine } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import ReportSheet from "../../../../../components/Report/ReportSheet";

interface Props {
  isExternal: boolean;
  userGid: number;
}

const ActionsGroup = ({ isExternal, userGid }: Props) => {
  const [openReportSheet, setOpenReportSheet] = useState(false);
  const navigation = useNavigation()

  const settingHandler = () => {};

  const reportHandler = () => {
    setOpenReportSheet(true);
  };

  const editHandler = () => {
    navigation.navigate("EditProfile" as never)
  };

  return (
    <View style={styles.group}>
      {isExternal ? (
        <IconButton
          onPress={reportHandler}
          icon={<BadgeAlert size={24} color={colors.white} />}
        />
      ) : (
        <>
          <IconButton
            onPress={editHandler}
            icon={<PenLine size={24} color={colors.white} />}
          />
          <Divider width={10} />
          <IconButton
            onPress={settingHandler}
            icon={<Settings size={24} color={colors.white} />}
          />
        </>
      )}
      <ReportSheet
        open={openReportSheet}
        setOpen={setOpenReportSheet}
        userGid={userGid}
      />
    </View>
  );
};

export default ActionsGroup;

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
});
