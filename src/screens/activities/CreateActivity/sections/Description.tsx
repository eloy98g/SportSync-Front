import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// Components
import Divider from '../../../../components/common/Divider';
import TextArea from '../../../../components/common/inputs/TextArea';
import SectionContainer from '../components/SectionContainer';
import Title from '../components/Title';

// Context
import TextInput from '../../../../components/common/inputs/TextInput';
import CreateContext from '../context/CreateContext';

const Description = () => {
  const { draft, setDraft } = useContext(CreateContext);

  const descriptionHandler = (e: any) => {
    setDraft(prevState => ({
      ...prevState,
      description: e,
    }));
  };

  const nameHandler = (e: any) => {
    setDraft(prevState => ({
      ...prevState,
      name: e,
    }));
  };

  return (
    <SectionContainer>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Divider height={42} />
        <Title title="Nombre" />
        <Divider height={12} />
        <TextInput
          placeholder="Nombre de la actividad"
          value={draft.name}
          onChange={nameHandler}
        />
        <Divider height={36} />
        <Title title="Descripción" />
        <Divider height={12} />
        <TextArea
          placeholder="Añadir información relevante"
          value={draft.description}
          onChange={descriptionHandler}
          height={300}
        />
      </ScrollView>
    </SectionContainer>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
  },
});
