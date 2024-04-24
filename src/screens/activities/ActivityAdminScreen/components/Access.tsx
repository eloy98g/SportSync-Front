import React, { useState } from "react";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Icon from "../../../../components/common/Icon";
import AccessSheet from "./AccessSheet";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const Access = ({ data, setActivity }: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { access } = data;

  const accessText = access === "open" ? "Abierta" : "Cerrada";

  const accessHandler = () => {
    setSheetOpen(true);
  };

  return (
    <>
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
      <AccessSheet
        open={sheetOpen}
        openHandler={setSheetOpen}
        access={access}
        setActivity={setActivity}
      />
    </>
  );
};

export default Access;
