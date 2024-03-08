import {StatusBar} from "react-native"
import Popover from "react-native-popover-view";

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
       <StatusBar backgroundColor={"rgba(0,0,0,0.5)"} />
      {children}
    </Popover>
  );
};

export default PopOver;
