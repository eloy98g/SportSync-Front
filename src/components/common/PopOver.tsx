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
      popoverStyle={{ borderRadius: 20 }}
    >
      {children}
    </Popover>
  );
};

export default PopOver;
