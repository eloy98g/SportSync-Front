import { useNavigation } from "@react-navigation/native";

const useNavigate = () => {
  const navigation = useNavigation();
  const navigateTo = (screen: string, params: any) =>
    navigation.navigate(screen, params);

  return { navigateTo };
};

export default useNavigate;
