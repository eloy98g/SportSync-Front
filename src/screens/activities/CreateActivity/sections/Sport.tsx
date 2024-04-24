import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Search from "../../../../components/common/inputs/Search";
import SectionContainer from "../components/SectionContainer";
import SportCard from "../components/SportCard";

// Context
import CreateContext from "../context/CreateContext";

const Sport = () => {
  const { sports, draft, setDraft } = useContext(CreateContext);
  const [filter, setFilter] = useState("");

  const filteredSports = sports.filter((sport) =>
    sport.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const sportHandler = (gid: number) => {
    setDraft((prevState) => ({ ...prevState, sport: gid }));
  };

  return (
    <SectionContainer>
      <View style={styles.search}>
        <Search onSearch={setFilter} placeholder="Buscar deporte" />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Divider height={12} />
        {filteredSports.map((sport) => (
          <React.Fragment key={sport.gid}>
            <SportCard
              {...sport}
              onPress={sportHandler}
              selected={draft.sport === sport.gid}
            />
            <Divider height={12} />
          </React.Fragment>
        ))}
      </ScrollView>
    </SectionContainer>
  );
};

export default Sport;

const styles = StyleSheet.create({
  search: {
    width: "100%",
    paddingTop: 20,
  },
  content: {
    height: 1,
    width: "100%",
  },
});
