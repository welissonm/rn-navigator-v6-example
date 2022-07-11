import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import About from "../screens/About";
import { useWindowDimensions } from "react-native";

const { Screen, Navigator} = createDrawerNavigator();



export function DrawerRoutes(){
  const dimensions = useWindowDimensions();
  return (
    <Navigator
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
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
    </Navigator>
  )
}