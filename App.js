


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Home from './src/pages/Home'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group screenOptions={{ headerShown : false }}>

      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



