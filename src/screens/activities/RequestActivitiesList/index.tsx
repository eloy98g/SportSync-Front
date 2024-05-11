import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import BackHeader from "../../../components/BackHeader";
import Error from "../../../components/Status/Error";
import Divider from "../../../components/common/Divider";
import RequestList from "./components/RequestList";
import colors from "../../../theme/colors";

interface Props {
  route: {
    params: any;
  };
}

const RequestActivitiesList = ({ route }: Props) => {
  const { requests } = route.params;

  const numRequests = requests.filter(
    (req: any) => req.requests.length > 0
  ).length;

  return (
    <Screen>
      <BackHeader title="Solicitudes de participación" />
      {numRequests === 0 ? (
        <Error color={colors.black} error="No hay solicitudes" />
      ) : (
        <View style={styles.container}>
          <Divider height={80} />
          <ScrollView style={styles.scroll}>
            {requests.map((req: any) => (
              <RequestList requestList={req} />
            ))}
          </ScrollView>
        </View>
      )}
    </Screen>
  );
};

export default RequestActivitiesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    height: "100%",
  },
  scroll: {
    height: 1,
    width: "100%",
  },
});
