import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { Text } from 'react-native';

import { ResponsiveRegister } from './src/screens/ResponsibleRegister';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <ResponsiveRegister />
    );
  }

}

