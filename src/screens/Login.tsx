import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
  const navigation = useNavigation();
  function login(){
    navigation.navigate('home');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#282a36'}}>
      <View style={{  backgroundColor: 'transparent', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Text style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 30, fontWeight: 'bold'}}> 
          Home 
        </Text>
      </View>
    </View>
  )
}