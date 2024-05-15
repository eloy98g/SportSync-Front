import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import User from "../../../../store/types/user/User";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import unixToDate from "../../../../utils/date/unixToDate";
import VerifiedLine from "./VerifiedLine";
import useStatus from "../../../../hooks/useStatus";
import Loading from "../../../../components/Status/Loading";
import Error from "../../../../components/Status/Error";
import Api from "../../../../services/api";
import InfoContent from "./InfoContent";

interface Props {
  data: User;
}

interface ActivitiesData {
  participated: number;
  published: number;
}

const Information = ({ data }: Props) => {
  const { phoneVerified, emailVerified, creationDate } = data;

  const { status, setStatus } = useStatus();
  const [error, setError] = useState<string>("");
  const [activitiesData, setActivitiesData] = useState<ActivitiesData>({
    participated: 0,
    published: 0,
  });

  const getData = async () => {
    try {
      const activityParams = `?admin=${data.gid}&status[]=finished`;
      const response = await Api.confirmation.getAll({ userGid: data.gid });
      const activityResponse = await Api.activity.getAll(activityParams);

      if (
        response.status === "success" &&
        activityResponse.status === "success"
      ) {
        setActivitiesData({
          participated: response.data.length,
          published: activityResponse.data.length,
        });
        setStatus("success");
      } else {
        setError(response.message || activityResponse.message);
        setStatus("error");
      }
    } catch (error: any) {
      setError(error.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (data.gid) getData();
  }, [data.gid]);

  return (
    <View style={styles.container}>
      {phoneVerified && <VerifiedLine text={"Correo electrónico confirmado"} />}
      {phoneVerified && <Divider height={4} />}
      {emailVerified && <VerifiedLine text={"Móvil confirmado"} />}
      {emailVerified && <Divider height={8} />}

      {status === "loading" || status === "idle" ? (
        <Loading />
      ) : status === "error" ? (
        <Error error={error} />
      ) : (
        <InfoContent
          participated={activitiesData.participated}
          published={activitiesData.published}
        />
      )}

      <Text style={styles.text}>
        Usuario desde {unixToDate(creationDate || 0)}
      </Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 14,
  },
});
