import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import TextArea from "../../../../components/common/inputs/TextArea";
import Title from "./Title";

interface Props {
  comment: string;
  setReview: (T: any) => void;
}

const Comment = ({ comment, setReview }: Props) => {
  const [auxComment, setAuxComment] = useState(comment);

  useEffect(() => {
    setReview((prevState: any) => ({ ...prevState, comment: auxComment }));
  }, [auxComment]);

  return (
    <View style={styles.container}>
      <Title text="¿Qué te gustaría compartir con los demás?" />
      <Divider height={8} />
      <TextArea value={auxComment} onChange={setAuxComment} />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
