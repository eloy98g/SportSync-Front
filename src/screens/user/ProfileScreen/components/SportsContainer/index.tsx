import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Components
import SportsCarousel from './components/SportsCarousel';
import SportStats from './components/SportStats';

// Context
import { SportContainerContext } from './context/SportContainerContext';

// Theme
import Divider from '../../../../../components/common/Divider';
import colors from '../../../../../theme/colors';
import { family } from '../../../../../theme/fonts';
import ActivitiesList from './components/ActivitiesList';

const SportsContainer = () => {
  const { status, sports } = useContext(SportContainerContext);

  if (status === 'idle' || status === 'loading') {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  console.log('sports', sports);
  if (!sports.length) {
    return (
      <Text style={styles.text}>
        No ha participado en ninguna actividad todavía{' '}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <SportsCarousel />
      <Divider height={10} />
      <SportStats />
      <Divider height={20} />
      <ActivitiesList />
    </View>
  );
};

export default SportsContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 14,
  },
});
