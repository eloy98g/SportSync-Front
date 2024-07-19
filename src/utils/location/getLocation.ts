import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import Location from '../../store/types/location/Location';
import getAddress from './getAddress';

const getLocation = async () => {
  try {
    let { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      return null;
    }

    const locationPromise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject(new Error('Timeout exceeded while fetching location.'));
      }, 2000);
      getCurrentPositionAsync()
        .then(position => {
          clearTimeout(timeout);
          resolve(position);
        })
        .catch(error => {
          clearTimeout(timeout);
          reject(error);
        });
    });

    const position = await Promise.race([locationPromise]);

    const { coords } = position;
    const { latitude, longitude } = coords;

    const location: Location = {
      latitude,
      longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    const address = await getAddress(location);
    location.address = address;

    return location;
  } catch (e: any) {
    console.log('[error] fetching location', e.message);
    return null;
  }
};

export default getLocation;
