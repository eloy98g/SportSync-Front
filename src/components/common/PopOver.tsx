import { Popover as PpOTamagui } from "tamagui";

const Popover = (props: any) => {
  const { children } = props;

  return (
    <PpOTamagui>
      <PpOTamagui.Sheet>
        <PpOTamagui.Sheet.Overlay />

        <PpOTamagui.Sheet.Frame>
          <PpOTamagui.Sheet.ScrollView>
            <PpOTamagui.Adapt.Contents />
            {children}
          </PpOTamagui.Sheet.ScrollView>
        </PpOTamagui.Sheet.Frame>
      </PpOTamagui.Sheet>
    </PpOTamagui>
  );
};

export default Popover;
