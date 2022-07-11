import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { StackRoutes } from "./stack.routes";
import { TabsRoutes } from "./tabs.routes";

export default function Routes(){
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      {/* <TabsRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  )
}
