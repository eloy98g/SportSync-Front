import React from "react";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Hooks
import useNavigate from "../../../../hooks/useNavigate";

// Theme
import colors from "../../../../theme/colors";

// Types
import Activity from "../../../../store/types/activity/Activity";

interface Props {
  data: Activity;
}

const AdminButton = ({ data }: Props) => {
  const { navigateTo } = useNavigate();
  const buttonHandler = () => {
    navigateTo("ActivityAdminScreen", { activityGid: data.gid });
  };

  return (
    <>
      <MainButton
        color={colors.white}
        textColor={colors.primary}
        height={40}
        title={"Administrar actividad"}
        onPress={buttonHandler}
      />
      <Divider height={18} />
    </>
  );
};

export default AdminButton;
