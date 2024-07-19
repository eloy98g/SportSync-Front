import React, { useContext } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

// Components
import Divider from '../../../../components/common/Divider';
import FilteredActivity from './FilteredActivity';

// Context
import colors from '../../../../theme/colors';
import SearchContext from '../context/SearchContext';

const ActivitiesList = () => {
  const { filteredActivities, status } = useContext(SearchContext);

  if (status === 'loading') {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primary} size={'small'} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <Divider height={12} />
      {filteredActivities.map(activity => (
        <React.Fragment key={activity.gid}>
          <FilteredActivity {...activity} />
          <Divider height={12} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: 1,
    paddingHorizontal: 12,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
