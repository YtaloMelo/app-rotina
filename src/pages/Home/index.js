import { View, Text, Image, Touchable } from "react-native";
import style from "./style"; // Assuming your stylesheet is named "style.js"
import { TouchableOpacity } from "react-native-web";

export default function Cadastro({ route, navigation }) {

  const { eml } = route.params;

  return (
    <View style={style.fundo}>
      {/* Align perfilimg to top-left with margin (assuming this is the desired alignment) */}


      <View style={style.post1}>
        <View style={style.circle} />
        <Text style={style.textoqd}>BEM VINDO</Text>
        <Text style={style.textoqd}> {eml}</Text>
      </View>
      <Image source={"./assets/perfilimg.png"} style={style.perfilimg} />
      <View>
        <TouchableOpacity>
          <View style={style.squad}>
            <Image source={"./assets/NVROTINA.png"} style={style.plus} />
          </View>
        </TouchableOpacity>
        <Image source={"./assets/iconhand.png"} style={style.squad2} />
        <Text style={style.textorp}>COMECE ADICIONANDO UMA NOVA ROTINA!</Text>
      </View>
        
          
        

    </View>
  );
}
