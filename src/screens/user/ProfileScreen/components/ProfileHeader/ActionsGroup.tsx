import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BadgeAlert, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import ReportSheet from "../../../../../components/Report/ReportSheet";
import Divider from "../../../../../components/common/Divider";
import FollowButton from "../../../../../components/common/buttons/FollowButton";

// Hooks
import { useAppDispatch } from "../../../../../hooks";

// Theme
import colors from "../../../../../theme/colors";

// Reducers
import { logOut } from "../../../../../store/features/user/userSlice";
import { family } from "../../../../../theme/fonts";

// Store
import User from "../../../../../store/types/user/User";

interface Props {
  isExternal: boolean;
  data: User;
}

const ActionsGroup = ({ isExternal, data }: Props) => {
  const { gid } = data;
  const [openReportSheet, setOpenReportSheet] = useState(false);

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const reportHandler = () => {
    setOpenReportSheet(true);
  };

  const logoutHandler = () => {
    dispatch(logOut());
    navigation.navigate("Home" as never);
  };

  return (
    <View style={styles.group}>
      {isExternal ? (
        <>
          <FollowButton player={data} color={colors.white} />
          <Divider width={10} />
          <IconButton
            onPress={reportHandler}
            icon={<BadgeAlert size={24} color={colors.white} />}
          />
        </>
      ) : (
        <IconButton
          onPress={logoutHandler}
          icon={<LogOut size={24} color={colors.white} />}
        />
      )}
      <ReportSheet
        open={openReportSheet}
        setOpen={setOpenReportSheet}
        userGid={gid}
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
  text: {
    fontFamily: family.bold,
    color: colors.white,
    fontSize: 12,
  },
});
