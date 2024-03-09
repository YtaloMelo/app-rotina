import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato/Lato-Black.ttf'),
  });
  
  return (
    
    <View style={estilos.container}>
      <View style={estilos.alinhar}>
      <Text style={estilos.titulo}>
        LOGIN
      </Text>
      </View>

      <TextInput
         style={estilos.input}
         keyboardType="email-address"
         placeholder="Digite seu E-mail"
         placeholderTextColor="#2E7A76"/> 
             

      <TextInput 
        style={estilos.input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#2E7A76"
        secureTextEntry={true}/> 

      <TouchableOpacity style={estilos.button}>
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
  texto:{
    color: "#000",
    fontSize: 12
    
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width:"80%"
    
    
  },
  button:{
    backgroundColor: "#48B7B0",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8
  },
  
  titulo:{
    alignContent:'flex-start',
    fontFamily:'Lato-Black',
    fontSize: 20,
    fontWeight:'bold',
    color:"#2E7A76",
  },

  alinhar: {
    
  }
  
});
