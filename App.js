import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato/Lato-Black.ttf'),
  });
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptySenha, setIsEmptySenha] = useState(false);
  const [email, setEml] = useState('');
  const [senha, setSnh] = useState('');

  function val() {
    let sEmail = email;
    let sSenha = senha; 

    if (sEmail == '') {
      setIsEmptyEmail(true);
    } else {
      setIsEmptyEmail(false);
    }

    if (sSenha == '') {
     setIsEmptySenha(true);
    } else {
      setIsEmptySenha(false);
    }
  }


  return (


    <View style={estilos.container}>
      <Image source={"./assets/logo.png"} style={estilos.logo} />
      <View style={estilos.alinhar}>
        <Text style={estilos.titulo}>
          LOGIN
        </Text>
      </View>

      <TextInput
        style={estilos.input}
        value={email}
        onChangeText={(text) => setEml(text)}
        keyboardType="email-address"
        placeholder="Digite seu E-mail"
        placeholderTextColor="#2E7A76" />

      <Text
        style={estilos.valid}
      >{isEmptyEmail == true ? "CAMPO VAZIO" : ""}</Text>


      <TextInput
        style={estilos.input}
        value={senha}
        onChangeText={(text) => setSnh(text)}
        placeholder="Digite sua Senha"
        placeholderTextColor="#2E7A76"
        secureTextEntry={true} />

      <Text
        style={estilos.valid}
      >{isEmptySenha == true ? "CAMPO VAZIO" : ""}</Text>


      <TouchableOpacity
        onPress={val}
        style={estilos.button}>
        <Text>
          Entrar
        </Text>
      </TouchableOpacity>
      
    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEAED',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  texto: {
    color: "#000",
    fontSize: 12

  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "80%"


  },
  button: {
    backgroundColor: "#48B7B0",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8
  },

  titulo: {
    alignContent: 'flex-start',
    fontFamily: 'Lato-Black',
    fontSize: 20,
    fontWeight: 'bold',
    color: "#2E7A76",
  },

  valid: {
    fontFamily: 'Lato-Black',
    fontSize: 10,
    fontWeight: 'bold',
    color: "#DA6767",
  },
  logo: {
    width: 200,
    height: 200,
  }
});
