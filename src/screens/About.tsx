import { Button, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteProps = {
  message: string | undefined
}

export default function About(){
  const navigation = useNavigation();
  const message = (useRoute().params as RouteProps)?.message
  function openScreen(){
    navigation.navigate('home');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#282a36'}}>
      <Button 
      title="Ir pra Tela Principal"
      onPress={openScreen}
      />
      <View style={{  backgroundColor: 'transparent', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        { message && <Text style={{ backgroundColor: 'transparent', color: '#fff'}}> Mensagem: { message }</Text> }
        <Text style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 30, fontWeight: 'bold'}}> 
          About 
        </Text>
      </View>
    </View>
  )
}