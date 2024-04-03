import { useState } from "react";
import { StatusBar } from "react-native";
import Popover from "react-native-popover-view";

interface Props {
  children: any;
  open: boolean;
  setOpen: (T: boolean) => void;
  parentRef: any;
}

const PopOver = ({ children, open, setOpen, parentRef }: Props) => {
  const [showStatus, setShowStatus] = useState(false);
  const popoverHandler = () => {
    setOpen(false);
  };

  return (
    <Popover
      isVisible={open}
      onRequestClose={popoverHandler}
      from={parentRef}
      onOpenStart={() => setShowStatus(true)}
      onCloseStart={() => setShowStatus(false)}
      popoverStyle={{ borderRadius: 12 }}
      animationConfig={{ duration: 200 }}
    >
      {showStatus && <StatusBar backgroundColor={"rgba(0,0,0,0.5)"} />}
      {children}
    </Popover>
  );
};

export default PopOver;
