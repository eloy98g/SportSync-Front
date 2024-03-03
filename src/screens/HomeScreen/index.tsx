import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Screen from "../../components/common/Screen";
import Divider from "../../components/common/Divider";
import HomeSection from "./components/HomeSection";

// Theme
import { PHONE } from "../../theme/breakPoints";

const HomeScreen = () => {
  const sections = [
    {
      title: "",
      data: [
        {
          size: "large-y",
          title: "Subir resultado",
          filter: false,
          image: require("../../assets/images/actionButtons/score.jpg"),
        },
      ],
    },
    {
      title: "",
      data: [
        {
          size: "normal",
          title: "Crear",
          filter: false,
          marginBottom: 20,
          image: require("../../assets/images/actionButtons/create.jpg"),
        },
        {
          size: "large-x",
          title: "Únete a otros jugadores",
          filter: false,
          image: require("../../assets/images/actionButtons/addFriend.jpg"),
        },
        {
          size: "normal",
          title: "Escanear QR",
          filter: false,
          image: require("../../assets/images/actionButtons/find.jpg"),
        },
      ],
    },
    {
      title: "",
      data: [
        {
          size: "large-y",
          title: "Tutorial",
          filter: false,
          image: require("../../assets/images/actionButtons/tutorial.png"),
        },
      ],
    },
  ];

  return (
    <Screen>
      <View style={styles.content}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Divider height={20} />
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <Divider height={20} />}
              <HomeSection title={section.title} data={section.data} />
            </React.Fragment>
          ))}
          <Divider height={100} />
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    maxWidth: PHONE,
  },
});

export default HomeScreen;
