import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/others/SplashScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import AuthScreen from "../screens/user/AuthScreen";
import ChatListScreen from "../screens/social/ChatListScreen";
import ChatScreen from "../screens/social/ChatScreen";
import SportStats from "../screens/activities/SportStats";
import ActivityDetail from "../screens/activities/ActivityDetail";

// Components
import Footer from "../components/Footer";

// Hooks
import { useAppSelector } from "../hooks";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const stateUser = useAppSelector((state) => state.user.user);
  const loggedIn = !!stateUser.gid;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: "pop",
          gestureEnabled: false,
        }}
        initialRouteName="Splash"
      >
        {loggedIn ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ChatList" component={ChatListScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="SportStats" component={SportStats} />
            <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
          </>
        )}
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default AppNavigator;
