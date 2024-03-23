import React, { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import {
  Code,
  useCameraDevice,
  useCodeScanner,
  Camera,
  useCameraPermission,
} from "react-native-vision-camera";

// Components
import PermissionError from "./components/PermissionError";

interface Props {
  setValue: (T: any) => void;
}

const Scanner = ({ setValue }: Props) => {
  const { hasPermission, requestPermission } = useCameraPermission();

  const permissionsHandler = async () => {
    await requestPermission();
  };

  useEffect(() => {
    permissionsHandler();
  }, []);

  const device = useCameraDevice("back");

  const onCodeScanned = useCallback((codes: Code[]) => {
    const value = codes[0]?.value;
    setValue(value);
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: onCodeScanned,
  });

  if (!hasPermission || device == null)
    return <PermissionError onPress={permissionsHandler} />;

  return (
    <View style={styles.container}>
      {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
          torch={"off"}
          enableZoomGesture={true}
        />
      )}
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderRadius:20
  },
});
