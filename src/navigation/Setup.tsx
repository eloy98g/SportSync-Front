import { useNavigationState } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const PREVENT_SCREENS = [
  'Splash',
  'EditProfile',
  'Home',
  'DeletePlayersScreen',
];

const Setup = () => {
  const navigationState = useNavigationState(state => state);

  useEffect(() => {
    const handleBackButton = () => {
      if (shouldPreventBackButton()) {
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navigationState]);

  const shouldPreventBackButton = () => {
    const currentRouteName = navigationState.routes[navigationState.index].name;

    return PREVENT_SCREENS.includes(currentRouteName);
  };

  return <></>;
};

export default Setup;
