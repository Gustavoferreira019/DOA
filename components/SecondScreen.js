// src/components/SecondScreen.js
import { StyleSheet, View, Text} from 'react-native';
import LoginForm from './Login'
export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DOE+</Text>
      <LoginForm />
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
  text: {
    fontSize: 62,
    color: '#5a0e12',
    fontWeight: 'bold',
    
  },
});
