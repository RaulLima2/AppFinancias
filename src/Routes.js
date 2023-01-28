import React from 'react';
import Welcome from './screens/Welcome/index';
import Login from './screens/Login/index';
import CadastroFeito from './screens/CadastroFeito/index';
import Home from './screens/Home/index'
import Extratos from './screens/Extratos/index';
import CriarCategoria from './screens/CriarCategoria/index';
import Registro from './screens/Registro/index';
import Excluido from './screens/Excluido/index';
import Receitas from './screens/Receitas/index';
import Salvo from './screens/Salvo/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    {/*  <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>*/}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome}  />
        <Stack.Screen name="CadastroFeito" component={CadastroFeito} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Extratos" component={Extratos} />
        <Stack.Screen name="CriarCategoria" component={CriarCategoria} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Excluido" component={Excluido} />
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="Salvo" component={Salvo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;