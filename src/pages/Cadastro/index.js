import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import style from '../Cadastro/style';



export default function Cadastro({ navigation }) {

    const [fontsLoaded] = useFonts({
        'Lato-Black': require('./../../../src/fonts/Lato/Lato-Black.ttf')
    });

   
    function acessLogin(){
        navigation.navigate('Login');
    }

  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptySenha, setIsEmptySenha] = useState(false);
  const [isEmptySenhaConf, setIsEmptySenhaConf] = useState(false);
  const [isEmptyNome, setIsEmptyNome] = useState(false);
  const [email, setEml] = useState('');
  const [senha, setSnh] = useState('');
  const [nome, setNome] = useState('');
  const [senhaC, setSnhC] = useState('');
  
  function val() {
    let sEmail = email;
    let sSenha = senha; 
    let sNome = nome;
    let sSenhac = senhaC;

    if (sNome == '') {
      setIsEmptyNome(true);
    } else if (sEmail == ''){
      setIsEmptyEmail(true);
        
    } else if (sSenha == '') {
     setIsEmptySenha(true);
    }  else if ( sSenhac == '') {
      setIsEmptySenhaConf(true);
     } else {
      acessLogin();
     }

    
  }


  return (

  

    <View style={style.container}>
      <Image source={"./assets/logo.png"} style={style.logo} />
      <View style={style.alinhar}>
        <Text style={style.titulo}>
          CADASTRO
        </Text>
      </View>

      <TextInput
        style={style.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
        keyboardType="text"
        placeholder="Digite seu Nome"
        placeholderTextColor="#2E7A76" />

    <Text
        style={style.valid}
      >{isEmptyEmail == true ? "CAMPO VAZIO" : ""}</Text>

      <TextInput
        style={style.input}
        value={email}
        onChangeText={(text) => setEml(text)}
        keyboardType="email-address"
        placeholder="Digite seu E-mail"
        placeholderTextColor="#2E7A76" />

      <Text
        style={style.valid}
      >{isEmptyEmail == true ? "CAMPO VAZIO" : ""}</Text>


      <TextInput
        style={style.input}
        value={senha}
        onChangeText={(text) => setSnh(text)}
        placeholder="Digite sua Senha"
        placeholderTextColor="#2E7A76"
        secureTextEntry={true} />

      <Text
        style={style.valid}
      >{isEmptySenha == true ? "CAMPO VAZIO" : ""}</Text>

<TextInput
        style={style.input}
        value={senhaC}
        onChangeText={(text) => setSnhC(text)}
        placeholder="Confirme sua Senha"
        placeholderTextColor="#2E7A76"
        secureTextEntry={true} />

      <Text
        style={style.valid}
      >{isEmptySenha == true ? "CAMPO VAZIO" : ""}</Text>


      <TouchableOpacity
        onPress={val}
        style={style.button}>
        <Text style={style.btntext}>
          Entrar
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
                onPress={acessLogin}
                style={style.button}>
                <Text style={style.btntext}>
                    Criar Conta
                </Text>
            </TouchableOpacity>

    </View>

  );
}


