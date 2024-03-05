import Popover from "react-native-popover-view";
import { Easing } from "react-native-reanimated";

const PopOver = (props: any) => {
  const { children, open, setOpen, parentRef } = props;

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
      {children}
    </Popover>
  );
};

export default PopOver;
