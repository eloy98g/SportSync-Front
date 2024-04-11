import React from "react";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: Activity;
  setActivity:  React.Dispatch<React.SetStateAction<Activity>>
}

const Visibility = ({ data }: Props) => {
  const { access } = data;

  const accessText =
    access === "public" ? "Actividad pública" : "Actividad privada";

  const accessHandler = () => {};

  return (
    <>
      <Label text="Cambiar visiblidad" />
      <Divider height={8} />
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
    </>
  );
};

export default Visibility;