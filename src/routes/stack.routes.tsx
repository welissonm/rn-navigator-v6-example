import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Login from "../screens/Login";

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
  return (
    <Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: '#18191a'
      },
      headerTintColor: '#f7f7ff',
    }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          title: 'Tela Principal',
          headerTitleAlign: 'center',
        }}
      />
      <Screen
      name="about"
      options={{
        title: 'Informações',
      }}
      component={About}
      />
      <Screen
      name="login"
      options={{
        headerShown: false,
      }}
      component={Login}
      />
    </Navigator>
  )
}