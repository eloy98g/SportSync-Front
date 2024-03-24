import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import Search from "../../../components/common/inputs/Search";
import BackHeader from "../../../components/BackHeader";

// Types
import UserSearch from "../../../store/types/UserSearch";
// Placeholder
import USER_SEARCH from "../../../api/placeholders/USER_SEARCH";
import SearchUserItem from "./components/SearchUserItem";
import Divider from "../../../components/common/Divider";

const FindUserScreen = () => {
  const [users, setUsers] = useState<UserSearch[]>([]);
  const searchHandler = async (search: string) => {
    if (search.length > 4) {
      setUsers(USER_SEARCH);
    }
  };

  console.log("users", users.length);
  return (
    <Screen>
      <BackHeader title="Buscar usuario" />
      <View style={styles.container}>
        <Search
          onSearch={searchHandler}
          placeholder="Buscar por nombre de usuario"
        />
        <ScrollView style={styles.scroll}>
          <Divider height={12} />
          {users.map((user: UserSearch) => (
            <React.Fragment key={user.gid}>
              <SearchUserItem data={user} />
              <Divider height={12} />
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default FindUserScreen;

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
