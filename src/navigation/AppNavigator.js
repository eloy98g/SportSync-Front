import React, { useEffect } from "react";
import { BackHandler } from "react-native";
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
import MapScreen from "../screens/activities/MapScreen.tsx";
import EditProfile from "../screens/user/EditProfile";
import ReviewScreen from "../screens/activities/ReviewScreen";
import CodeScanScreen from "../screens/activities/CodeScanScreen";
import FindUserScreen from "../screens/social/FindUserScreen";
import CreateActivity from "../screens/activities/CreateActivity";

// Components
import Footer from "../components/Footer";

// Hooks
import { useAppSelector } from "../hooks";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const stateUser = useAppSelector((state) => state.user.user);
  const loggedIn = !!stateUser.gid;

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function () {
      return true;
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: "pop",
          gestureEnabled: false,
        }}
        pre
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Home"
          component={loggedIn ? HomeScreen : AuthScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="SportStats" component={SportStats} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="CodeScanScreen" component={CodeScanScreen} />
        <Stack.Screen name="FindUserScreen" component={FindUserScreen} />
        <Stack.Screen name="CreateActivity" component={CreateActivity} />
      </Stack.Navigator>
      {loggedIn && <Footer />}
    </NavigationContainer>
  );
};

export default AppNavigator;
