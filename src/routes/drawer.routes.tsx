import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import About from "../screens/About";
import { useWindowDimensions } from "react-native";
import { TabIcon } from "../components/TabIcon";

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
      drawerActiveTintColor: '#ff79c6',
      drawerStyle: {
        backgroundColor: '#585b82'
      }

    }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          title: 'Tela Principal',
          headerTitleAlign: 'center',
          drawerIcon: ({color, size, focused}) => (
            <TabIcon color={color} size={size} name={'home'} focused={focused}/>
          )
        }}
      />
      <Screen
      name="about"
      options={{
        title: 'Informações',
        drawerIcon: ({color, size, focused}) => (
          <TabIcon color={color} size={size} name={'article'} focused={focused}/>
        )
      }}
      component={About}
      />
    </Navigator>
  )
}