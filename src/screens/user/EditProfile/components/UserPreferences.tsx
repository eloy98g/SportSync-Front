import React, { useEffect } from "react";
import { View } from "react-native";

// Components
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";
import SportPicker from "./SportPicker";

// Types
import User from "../../../../store/types/user/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserPreferences = ({ editedUser, setEditedUser }: Props) => {
  const locationHandler = (input: any) => {
    const { coordinates, radius } = input;
    if (coordinates) {
      setEditedUser((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        },
      }));
    }
    if (radius) {
      setEditedUser((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          radius: radius,
        },
      }));
    }
  };

  return (
    <View>
      <Label text="Área de juego" />
      <LocationPicker
        setValue={locationHandler}
        option="radius"
        location={editedUser.location}
      />
      <Divider height={12} />
      <Label text="Deportes favoritos" />
      <SportPicker />
    </View>
  );
};

export default UserPreferences;
