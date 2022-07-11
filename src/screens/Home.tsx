import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
  const navigation = useNavigation();
  function openScreen(){
    navigation.navigate('about');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#282a36'}}>
      <Button 
      title="Ir pra informações"
      onPress={openScreen}
      />
      <View style={{  backgroundColor: 'transparent', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Text style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 30, fontWeight: 'bold'}}> 
          Home 
        </Text>
      </View>
    </View>
  )
}