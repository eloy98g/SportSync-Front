import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Components
import Divider from '../../../../components/common/Divider';
import Icon from '../../../../components/common/Icon';

// Hooks
import { useAppSelector } from '../../../../hooks';
import useNavigate from '../../../../hooks/useNavigate';

// Types
import Activity from '../../../../store/types/activity/Activity';

// Theme
import colors from '../../../../theme/colors';
import { family } from '../../../../theme/fonts';

// Utils
import unixToDate from '../../../../utils/date/unixToDate';
import distanceBetween from '../../../../utils/distances/distanceBetween';
import formattedDistance from '../../../../utils/distances/formattedDistance';

const PublicActivity = (props: Activity) => {
  const {
    sport,
    type,
    startDate,
    teams,
    playersPerTeam,
    gid,
    location,
    name,
    access,
  } = props;
  const { name: sportName } = sport;
  const { navigateTo } = useNavigate();
  const userLocation = useAppSelector(state => state.user.location);
  const distance = userLocation
    ? 'a ' + formattedDistance(distanceBetween(userLocation, location))
    : '';

  const date = unixToDate(startDate);
  const currentPlayers = teams.reduce(
    (sum, team) => sum + team.players.length,
    0,
  );
  const totalPlayers = teams.length * playersPerTeam;

  const activityHandler = () => {
    navigateTo('ActivityDetail', { gid });
  };

  return (
    <TouchableOpacity onPress={activityHandler} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.title}>
              {name}
            </Text>
          </View>
          <View style={styles.icons}>
            <Divider width={5} />
            <Icon icon={access} color={colors.black} size={18} />
            {type !== 'normal' && (
              <>
                <Divider width={5} />
                <Icon icon={type} color={colors.black} size={18} />
              </>
            )}
          </View>
        </View>
        <Text style={styles.title}>{sportName}</Text>
        <Text style={styles.subText}>{distance}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subText}>{date}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.title, { fontFamily: family.normal }]}>
            {currentPlayers} de {totalPlayers}
          </Text>
          <Divider width={5} />
          <Icon icon={'public'} color={colors.black} size={12} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PublicActivity;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 115,
    borderRadius: 12,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: family.bold,
  },
  icons: {
    flexDirection: 'row',
  },
  subText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: family.semibold,
  },
});
