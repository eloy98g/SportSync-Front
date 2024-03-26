import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { useAppSelector } from "../../../../hooks";
import { Pencil } from "lucide-react-native";
import colors from "../../../../theme/colors";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";
import User from "../../../../store/types/user/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const ProfilePicturePicker = ({ editedUser, setEditedUser }: Props) => {
  const [response, setResponse] = useState<any>(null);
  const { name, image } = useAppSelector((state) => state.user.user);

  const imagePickerHandler = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 0,
      mediaType: "photo",
      includeBase64: false,
      includeExtra: true,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={imagePickerHandler}>
        <Image
          style={styles.image}
          source={
            image
              ? { uri: image || "" }
              : require("../../../../assets/images/blankUser.webp")
          }
        />
        <View style={styles.iconWrapper}>
          <Pencil color={colors.white} size={16} />
        </View>
      </TouchableOpacity>
      <Divider height={8} />
      <Label text={"Cambiar imagen de perfil"} />
    </View>
  );
};

export default ProfilePicturePicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    right: 0,
  },
});
