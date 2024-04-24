import React, { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
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
  setValue: (T: string | null) => void;
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
    setValue(value || null);
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
      <LottieView
        loop={true}
        autoPlay
        speed={1}
        style={{
          width: "100%",
          height: 300,
          backgroundColor: "transparent",
        }}
        source={require("../../../../assets/animations/scan.json")}
      />
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
