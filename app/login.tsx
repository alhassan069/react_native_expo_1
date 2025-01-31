import { View, Text, Image, TextInput} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Image source={require("@/assets/images/shambhu.png")} style={{width: "100%", height: 400}} resizeMethod='auto' resizeMode='cover'/>
      <View style={{padding: 20, gap: 20}}>
        <TextInput placeholder='Enter your email' style={{ borderWidth: 1, paddingHorizontal: 20}} textContentType='emailAddress' inputMode='email' />
        <TextInput placeholder='Enter your password' style={{borderWidth: 1, paddingHorizontal: 20}} secureTextEntry={true}  />
      </View>
    </View>
  )
}

export default Login