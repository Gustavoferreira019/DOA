// src/components/LoginForm.js
import { StyleSheet, View, TextInput, Platform} from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, Platform.OS === 'ios' ? styles.shadowIOS : styles.shadowAndroid]}
        placeholder="Usuário"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, Platform.OS === 'ios' ? styles.shadowIOS : styles.shadowAndroid]}
        placeholder="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button
        buttonStyle={styles.button}
        title="Entrar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:70,
  },
  input: {
    height: 65,
    width:350,
    borderColor: 'transparent',
    borderWidth: 0.3,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius:10,
  },
  button:{
    borderRadius:10,
    backgroundColor: '#800000',
    marginTop:25,
    height:65,
  },
});
