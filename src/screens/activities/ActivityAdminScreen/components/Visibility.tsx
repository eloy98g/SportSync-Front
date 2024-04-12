import React, { useState } from "react";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";
import VisibilitySheet from "./VisibilitySheet";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const Visibility = ({ data, setActivity }: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { access } = data;

  const accessText =
    access === "public" ? "Actividad pública" : "Actividad privada";

  const accessHandler = () => {
    setSheetOpen(true);
  };

  return (
    <>
      <Label text="Cambiar visiblidad" />
      <Divider height={8} />
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
      <VisibilitySheet
        open={sheetOpen}
        openHandler={setSheetOpen}
        access={access}
        setActivity={setActivity}
      />
    </>
  );
};

export default Visibility;
