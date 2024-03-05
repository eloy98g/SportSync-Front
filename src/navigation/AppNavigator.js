import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/others/SplashScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import AuthScreen from "../screens/user/AuthScreen";

// Components
import Footer from "../components/Footer";

// Hooks
import { useAppSelector } from "../hooks";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const stateUser = useAppSelector((state) => state.user.user);
  const loggedIn = !!stateUser.gid;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: Platform.OS === "ios" ? true : false,
        }}
        initialRouteName="Splash"
      >
        {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
          </>
        )}
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default AppNavigator;
