import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import Divider from "../../../../components/common/Divider";
import RequestCard from "../../RequestListScreen/components/RequestCard";

interface Props {
  requestList: any;
}

const RequestList = ({ requestList }: Props) => {
  const [requests, setRequests] = useState(requestList.requests);
  if (!requests.length) {
    return <></>;
  }
  return (
    <>
      <View style={styles.activity}>
        <Text style={styles.title}>{requestList.activity.name}</Text>
        <Divider height={10} />
        {requests.map((request: any) => (
          <RequestCard
            user={request.user}
            request={request.gid}
            setRequests={setRequests}
          />
        ))}
      </View>
      <Divider height={30} />
    </>
  );
};

export default RequestList;

const styles = StyleSheet.create({
  activity: {
    width: "100%",
  },
  title: {
    fontFamily: family.bold,
    fontSize: 16,
    color: colors.black,
  },
});
