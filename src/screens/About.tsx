import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "react-native";

export default function About(){
  const navigation = useNavigation();
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
        <Text style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 30, fontWeight: 'bold'}}> 
          About 
        </Text>
      </View>
    </View>
  )
}