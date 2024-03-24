import React, { useEffect, useState, useRef } from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const JoinAnimation = () => {
  const [shown, setShown] = useState<"none" | "flex">("flex");
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        onAnimationFinish={() => setShown("none")}
        loop={false}
        speed={1}
        style={{
          width: "100%",
          height: 300,
          display: shown,
          backgroundColor: "transparent",
        }}
        source={require("../../../../assets/animations/codeSuccess")}
      />
    </View>
  );
};

export default JoinAnimation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
});
