import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Loading from "../CodeScanScreen/states/Loading";
import Error from "../../../components/Status/Error";
import RequestCard from "./components/RequestCard";

// Hooks
import useStatus from "../../../hooks/useStatus";

// Services
import Api from "../../../services/api";

// Types
import Application from "../../../store/types/application/Application";

interface Props {
  route: {
    params: {
      activityGid: string;
    };
  };
}
const RequestListScreen = ({ route }: Props) => {
  const { activityGid } = route.params;
  const { status, setStatus } = useStatus();
  const [requests, setRequests] = useState<Application[]>([]);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setStatus("loading");
      if (activityGid) {
        const response = await Api.application.getAll(activityGid);
        if (response.status === "success") {
          setRequests(response.data);
          setStatus("success");
        } else {
          setStatus("error");
          setError(response.message);
        }
      } else {
        setError("No se ha encontrado la actividad");
        setStatus("error");
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen>
      <BackHeader title="Peticiones" />
      <View style={styles.container}>
        {status === "loading" ? (
          <Loading />
        ) : status === "error" ? (
          <Error error={error} />
        ) : (
          <ScrollView style={styles.scroll}>
            <Divider height={12} />
            {requests.map(({ user, gid }) => (
              <React.Fragment key={user.gid}>
                <RequestCard
                  user={user}
                  request={gid}
                  setRequests={setRequests}
                />
                <Divider height={12} />
              </React.Fragment>
            ))}
          </ScrollView>
        )}
      </View>
    </Screen>
  );
};

export default RequestListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 92,
    justifyContent: "flex-start",
    paddingHorizontal: 12,
  },
  scroll: {
    width: "100%",
    height: 1,
  },
});
