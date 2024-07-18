import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import BackHeader from '../../../components/BackHeader';
import Card from '../../../components/common/Card';
import Divider from '../../../components/common/Divider';
import Screen from '../../../components/common/Screen';
import MainButton from '../../../components/common/buttons/MainButton';
import TextInput from '../../../components/common/inputs/TextInput';
import MessageModal from '../../../components/modals/MessageModal';
import { useAppSelector } from '../../../hooks';
import useNavigate from '../../../hooks/useNavigate';
import useStatus from '../../../hooks/useStatus';
import Api from '../../../services/api';
import colors from '../../../theme/colors';
import { family } from '../../../theme/fonts';
import validCode from './methods/validCode';

const ActivityCodeScreen = () => {
  const [code, setCode] = useState('');
  const [modal, setModal] = useState('');
  const [activityGid, setActivityGid] = useState();
  const { status, setStatus } = useStatus();
  const [error, setError] = useState('');
  const userGid = useAppSelector(state => state.user.user.gid);

  const { navigateTo } = useNavigate();

  const buttonActive = validCode(code);

  const finishHandler = () => {
    setModal('');
    navigateTo('ActivityDetail', { gid: activityGid });
  };

  const codeHandler = async () => {
    setStatus('loading');
    setError('');
    setModal('');

    const { data, message, status } = await Api.application.create({
      code: code.toUpperCase(),
      userGid,
    });

    if (status === 'success') {
      const { activityGid, joinType } = data;
      setActivityGid(activityGid);
      setStatus('success');
      setModal(joinType);
    } else {
      setStatus('error');
      setError(message);
    }
  };

  return (
    <Screen>
      <BackHeader title="Introduce un código" />
      <View style={styles.content}>
        <Card title="Introduce un código" border={false}>
          <TextInput onChange={setCode} value={code} placeholder="#XXXXX" />
          <Divider height={24} />
          <View style={styles.button}>
            <MainButton
              active={buttonActive}
              title="Aceptar"
              onPress={codeHandler}
              loading={status === 'loading'}
            />
          </View>
          {status === 'error' && <Divider height={12} />}
          {status === 'error' && <Text style={styles.error}>{error}</Text>}
        </Card>
      </View>
      <MessageModal
        visible={modal === 'administrated'}
        setVisible={setModal}
        message={
          'Solicitud enviada correctamente.\nEl administrador responserá en breve.'
        }
        onFinish={finishHandler}
      />
      <MessageModal
        visible={modal === 'automatic'}
        setVisible={setModal}
        message={
          'La actividad es abierta, por lo que has entrado correctamente.'
        }
        onFinish={finishHandler}
      />
    </Screen>
  );
};

export default ActivityCodeScreen;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: 12,
  },
  button: {
    height: 50,
  },
  error: {
    fontFamily: family.normal,
    color: colors.red,
    fontSize: 14,
  },
});
