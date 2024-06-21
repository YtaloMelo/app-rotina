import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import style from '../Login/style';

export default function Login({ navigation }) {

    const [fontsLoaded] = useFonts({
        'Lato-Black': require('./../../../src/fonts/Lato/Lato-Black.ttf')
    });

    function acessCadastro() {
        navigation.navigate('Cadastro');
    }
    
    function acessHome(){
        navigation.navigate('Home',
        { eml: email}
        );
    }
   

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
            navigation.navigate('Home');
            setIsEmptySenha(false); 
            acessHome();
        }


       
    }


    return (


        <View style={style.container}>
            <Image source={"./assets/logo.png"} style={style.logo} />
            <View style={style.alinhar}>
                <Text style={style.titulo}>
                    LOGIN
                </Text>
            </View>

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


            <TouchableOpacity
                onPress={val}
                style={style.button}>
               <Text style={style.btntext}>
                    ENTRAR
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={acessCadastro}
                style={style.button}>
                <Text style={style.btntext}>
                    CRIAR CONTA
                </Text>
            </TouchableOpacity>

        </View>

    );
}



