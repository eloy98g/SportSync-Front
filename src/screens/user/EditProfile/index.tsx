import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import BackHeader from '../../../components/BackHeader';
import Error from '../../../components/Status/Error';
import Divider from '../../../components/common/Divider';
import Screen from '../../../components/common/Screen';
import MainButton from '../../../components/common/buttons/MainButton';
import PersonalData from './components/PersonalData';
import ProfilePicturePicker from './components/ProfilePicturePicker';
import Title from './components/Title';
import UserPreferences from './components/UserPreferences';

// Hooks
import { useAppDispatch, useAppSelector } from '../../../hooks';
import useStatus from '../../../hooks/useStatus';

// Services
import Api from '../../../services/api';
import { setUser } from '../../../store/features/user/userSlice';
import colors from '../../../theme/colors';

const EditProfile = () => {
  const user = useAppSelector(state => state.user.user);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState('');
  const [showSuccessText, setShowSuccessText] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const dispatch = useAppDispatch();

  const saveData = async () => {
    setShowSuccessText(false);
    setError('');
    try {
      setStatus('loading');
      console.log('editedUser', JSON.stringify(editedUser));
      const response = await Api.user.update(user.gid, editedUser);
      if (response.status === 'success') {
        setStatus('success');
        dispatch(setUser(response.data));
        setShowSuccessText(true);
      } else {
        setStatus('error');
        setError(response.message);
      }
    } catch (error: any) {
      setStatus('error');
      setError(error.message);
    }
  };
  return (
    <Screen>
      <BackHeader title={'Editar perfil'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Divider height={92} />
        <ProfilePicturePicker
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
        <Divider height={24} />
        <PersonalData editedUser={editedUser} setEditedUser={setEditedUser} />
        <Divider height={24} />
        <Title text="Preferencias de juego" />
        <Divider height={12} />
        <UserPreferences
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
        <Divider height={36} />
        <MainButton
          onPress={saveData}
          title="Guardar cambios"
          fontSize={18}
          loading={status === 'loading'}
        />
        <View style={styles.error}>
          {!showSuccessText ? (
            <Error error={error} />
          ) : (
            <Error
              color={colors.secondary}
              error={'¡Datos guardados con éxito!'}
            />
          )}
        </View>
        <Divider height={60} />
      </ScrollView>
    </Screen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    paddingHorizontal: 12,
  },
  error: {
    height: 46,
    width: '100%',
  },
});
