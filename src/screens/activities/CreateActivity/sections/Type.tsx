import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Divider from '../../../../components/common/Divider';
import Label from '../../../../components/common/Label';

// Components
import SectionContainer from '../components/SectionContainer';
import TypeSelector from '../components/TypeSelector';
import CreateContext from '../context/CreateContext';
import Row from './Resume/Row';

const Type = () => {
  const { draft, setDraft } = useContext(CreateContext);
  const { visibility, type, access } = draft;
  const visibilityHandler = () => {
    setDraft(prevState => ({
      ...prevState,
      visibility: prevState.visibility === 'private' ? 'public' : 'private',
    }));
  };

  const competiitveHandler = () => {
    setDraft(prevState => ({
      ...prevState,
      type: prevState.type === 'normal' ? 'competitive' : 'normal',
    }));
  };

  const accessHandler = () => {
    setDraft(prevState => ({
      ...prevState,
      access: prevState.access === 'open' ? 'closed' : 'open',
    }));
  };

  return (
    <SectionContainer>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Divider height={42} />
        <View style={styles.content}>
          <Label text="Acceso" />
          <Divider height={6} />
          <Row>
            <TypeSelector
              title={'Pública'}
              description={'Las actividades será abierta a cualquier usuario'}
              selected={visibility === 'public'}
              onPress={visibilityHandler}
              height={150}
            />
            <Divider width={24} />
            <TypeSelector
              title={'Privada'}
              description={
                'Sólo será accesible a usuarios con código o invitación'
              }
              selected={visibility === 'private'}
              onPress={visibilityHandler}
              height={150}
            />
          </Row>
          <Divider height={24} />
          <Label text="Tipo de partido o actividad" />
          <Divider height={6} />
          <Row>
            <TypeSelector
              title={'Normal'}
              description={
                'El resultado no influirá en las puntuación personal.'
              }
              selected={type === 'normal'}
              onPress={competiitveHandler}
              height={150}
            />
            <Divider width={24} />
            <TypeSelector
              title={'Competitiva'}
              description={
                'Las actividades competitivas influyen en el nivel de los oponentes y en la puntuación personal.'
              }
              selected={type === 'competitive'}
              onPress={competiitveHandler}
              height={150}
            />
          </Row>
          <Divider height={24} />
          <Label text="Acceso" />
          <Divider height={6} />
          <Row>
            <TypeSelector
              title={'Abierta'}
              description={
                'Los usuarios se unirán sin necesidad de aprobación por parte del administrador.'
              }
              selected={access === 'open'}
              onPress={accessHandler}
              height={150}
            />
            <Divider width={24} />
            <TypeSelector
              title={'Cerrada'}
              description={
                'Cuando un usuario quiera unirse, te llegará una notificación y podrás adminitirlo o no.'
              }
              selected={access === 'closed'}
              onPress={accessHandler}
              height={150}
            />
          </Row>
        </View>
      </ScrollView>
    </SectionContainer>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
  },
  content: {
    flexDirection: 'column',
  },
});
