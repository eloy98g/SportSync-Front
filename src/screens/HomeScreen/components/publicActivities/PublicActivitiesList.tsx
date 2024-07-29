import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

// Components
import Divider from '../../../../components/common/Divider';
import PublicActivity from './PublicActivity';

// Methods
import isActivityFull from '../../../activities/ActivityDetail/methods/isActivityFull';
import isPlayer from '../../../activities/ActivityDetail/methods/isPlayer';

// Hooks
import { useAppSelector } from '../../../../hooks';

// Theme
import { PHONE } from '../../../../theme/breakPoints';
import colors from '../../../../theme/colors';
import { family } from '../../../../theme/fonts';
import distanceBetween from '../../../../utils/distances/distanceBetween';

const PublicActivitiesList = () => {
  const width = useWindowDimensions().width;
  const userGid = useAppSelector(state => state.user.user.gid);
  const scrollWidth = width >= PHONE ? PHONE : width;

  const userLocation = useAppSelector(state => state.user.user.location);
  const activities = useAppSelector(state => state.activity.publicActivities)
    .filter(
      activity =>
        activity.admin.gid !== userGid &&
        !isPlayer(userGid, activity?.teams) &&
        !isActivityFull(activity),
    )
    .sort((a, b) => {
      return distanceBetween(userLocation, a.location) >=
        distanceBetween(userLocation, b.location)
        ? -1
        : 1;
    });

  if (activities.length === 0) return <View />;

  return (
    <>
      <View style={[styles.container, { maxWidth: scrollWidth }]}>
        <View style={{ paddingLeft: 12 }}>
          <Text style={styles.title}>Te puede interesar...</Text>
        </View>
        <Divider height={12} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <Divider width={12} />
          {activities.map(activity => (
            <React.Fragment key={activity.gid}>
              <PublicActivity {...activity} />
              <Divider width={16} />
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
      <Divider height={20} />
    </>
  );
};

export default PublicActivitiesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
  scroll: {
    alignItems: 'flex-start',
  },
});
