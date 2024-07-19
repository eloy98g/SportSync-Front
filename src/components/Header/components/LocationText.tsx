import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import useStatus from '../../../hooks/useStatus';
import { setLocation } from '../../../store/features/user/userSlice';
import colors from '../../../theme/colors';
import { family } from '../../../theme/fonts';
import getAddress from '../../../utils/location/getAddress';
import getLocation from '../../../utils/location/getLocation';
import getLocationPermissions from '../../../utils/location/getLocationPermissions';
import Loading from '../../Status/Loading';

const LocationText = () => {
  const location = useAppSelector(state => state.user.location);
  const [address, setAddress] = useState('');
  const { status, setStatus } = useStatus();

  const dispatch = useAppDispatch();

  const addressHandler = async () => {
    if (location) {
      const newAddress = await getAddress(location);
      setAddress(newAddress);
    }
  };

  useEffect(() => {
    addressHandler();
  }, [location]);

  const locationHandler = async () => {
    setStatus('loading');
    const locationPermission = await getLocationPermissions();
    if (locationPermission) {
      const location = await getLocation();
      if (location) {
        dispatch(setLocation(location));
      }
    }
    setStatus('success');
  };

  return (
    <View style={styles.container}>
      {status === 'loading' ? (
        <Loading color={colors.secondary} size={12} />
      ) : location ? (
        <TouchableOpacity onPress={locationHandler}>
          <Text numberOfLines={1} style={styles.text}>
            Estás en {address}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={locationHandler}>
          <Text style={styles.text}>
            {'Presiona aquí para obtener ubicación'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LocationText;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.semibold,
    fontSize: 14,
    color: colors.secondary,
  },
  container: {
    width: '100%',
    paddingHorizontal: 12,
    height: 20,
  },
});
