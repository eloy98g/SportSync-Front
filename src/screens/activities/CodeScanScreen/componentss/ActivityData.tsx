import React from "react";
import { StyleSheet, Text } from "react-native";

// Components
import Card from "../../../../components/common/Card";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  hour: string;
  duration: number;
  description: string;
}
const ActivityData = ({ hour, duration, description }: Props) => {
  return (
    <>
      <Card title="Hora de inicio">
        <Divider height={8} />
        <Text style={styles.text}>{hour}</Text>
      </Card>
      <Divider height={20} />
      <Card title="Duración">
        <Divider height={8} />
        <Text style={styles.text}>{duration}</Text>
      </Card>
      <Divider height={20} />
      <Card title="Descripción">
        <Divider height={8} />
        <Text style={styles.text}>{description}</Text>
      </Card>
    </>
  );
};

export default ActivityData;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 16,
    textAlign: "left",
  },
});
