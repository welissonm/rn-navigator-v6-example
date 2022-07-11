import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabIcon } from "../components/TabIcon";
import Home from "../screens/Home";
import About from "../screens/About";

const { Screen, Navigator} = createBottomTabNavigator();



export function TabsRoutes(){
  return (
    <Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: '#18191a'
      },
      headerTintColor: '#f7f7ff',
      tabBarActiveTintColor:'#ff79c6'
    }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          title: 'Tela Principal',
          headerTitleAlign: 'center',
          tabBarLabel: 'Principal',
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon color={color} size={size} name={'home'} focused={focused}/>
          )
        }}
      />
      <Screen
      name="about"
      options={{
        title: 'Informações',
        tabBarLabel: 'Sobre',
        tabBarIcon: ({color, size, focused}) => (
          <TabIcon color={color} size={size} name={'article'} focused={focused}/>
        )
      }}
      component={About}
      />
    </Navigator>
  )
}