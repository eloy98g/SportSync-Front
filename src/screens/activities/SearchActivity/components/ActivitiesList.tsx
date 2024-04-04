import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Divider from "../../../../components/common/Divider";
import SearchContext from "../context/SearchContext";

const ActivitiesList = () => {
  const { filteredActivies } = useContext(SearchContext);
 
  return (
    <ScrollView style={styles.scroll}>
      <Divider height={12}/>
      {filteredActivies.map((activity) => (
        <Text key={activity.gid}>{activity.name}</Text>
      ))}
    </ScrollView>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  scroll:{
    width:"100%",
    height:1,
    paddingHorizontal: 12
  }
});
