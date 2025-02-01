import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/components/button'
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter();
  const onLogin = ()=>{
    router.navigate("/Login")
  }
  const onSignup = ()=>{
    router.navigate("/Signup")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <MyButton title='Login' onPress={onLogin}/>
      <MyButton title='Signup' onPress={onSignup}/>
    </View>
  )
}

export default Index