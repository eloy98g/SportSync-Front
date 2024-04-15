import React, { useState } from "react";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";
import VisibilitySheet from "./VisibilitySheet";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const Visibility = ({ data, setActivity }: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { visibility } = data;

  const visibilityText =
  visibility === "public" ? "Actividad pública" : "Actividad privada";

  const accessHandler = () => {
    setSheetOpen(true);
  };

  return (
    <>
      <Label text="Cambiar visiblidad" />
      <Divider height={8} />
      <TouchableInfo
        icon={<Icon icon={visibility} size={24} color={colors.black} />}
        title={visibilityText}
        onPress={accessHandler}
      />
      <VisibilitySheet
        open={sheetOpen}
        openHandler={setSheetOpen}
        visibility={visibility}
        setActivity={setActivity}
      />
    </>
  );
};

export default Visibility;
