import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import TeamNames from "../../../../../components/activities/TeamNames";
import Divider from "../../../../../components/common/Divider";
import Teams from "../../../../../components/activities/Teams";
import Card from "../../../../../components/common/Card";
import Score from "../../../../../components/activities/Score";
import { family } from "../../../../../theme/fonts";
import colors from "../../../../../theme/colors";

const index = ({ teams, result }: any) => {
  return (
    <Card title="Resultado">
      <View style={styles.content}>
        <TeamNames teams={teams} />
        <Divider width={12} />
        <Teams teams={teams} />
        <Score result={result} />
      </View>
    </Card>
  );
};

export default index;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    height: 120,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
