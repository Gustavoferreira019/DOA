import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../img/doacaoLogo.avif';

export default function MainScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SecondScreen');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DOE+</Text>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 400,
    width: 250,
  },
  title: {
    fontSize: 62,
    color: '#5a0e12',
    fontWeight: 'bold',
  },
});
