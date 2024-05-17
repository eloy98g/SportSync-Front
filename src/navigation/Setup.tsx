import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigationState } from '@react-navigation/native';

const Setup = () => {
  const navigationState = useNavigationState(state => state);

  useEffect(() => {
    const handleBackButton = () => {
      if (shouldPreventBackButton()) {
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [navigationState]);

  const shouldPreventBackButton = () => {
    const preventScreens = ["Splash", "EditProfile", "Home", "DeletePlayersScreen"]; 

    const currentRouteName = navigationState.routes[navigationState.index].name;

    console.log('currentRouteName',currentRouteName)
    return preventScreens.includes(currentRouteName);
  };

  return (
    <></>
  )
}

export default Setup

const styles = StyleSheet.create({})