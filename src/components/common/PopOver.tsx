import { StatusBar } from "react-native";
import Popover from "react-native-popover-view";

interface Props {
  children: React.ReactNode;
  open: boolean;
  setOpen: (T: boolean) => void;
  parentRef: any;
}

const PopOver = ({ children, open, setOpen, parentRef }: Props) => {
  const popoverHandler = () => {
    setOpen(false);
  };
  return (
    <Popover
      isVisible={open}
      onRequestClose={popoverHandler}
      from={parentRef}
      popoverStyle={{ borderRadius: 12 }}
      animationConfig={{ duration: 200 }}
    >
      <StatusBar backgroundColor={"rgba(0,0,0,0.5)"} />
      {children}
    </Popover>
  );
};

export default PopOver;
