import { View, Text } from "react-native";
import style from "./style"; // Assuming your stylesheet is named "style.js"

export default function Cadastro({ route, navigation }) {

  const { eml } = route.params;

  return (
    <View style={style.fundo}>
      <View style={style.post1}>
        <View style={style.circle} />
        <Text style={style.texto}>BEM VINDO</Text>
        <Text style={style.texto}> {eml}</Text>
        <Text style={style.texto}>EDITAR PERFIL</Text>
      </View>
      <View>
        <View style={style.squad}>
            <Text style={style.plus}>+</Text>
            <Text style={style.textoqd} >NOVA ROTINA</Text>
        </View>
      </View>
    </View>
  );
}
