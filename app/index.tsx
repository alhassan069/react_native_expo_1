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
  const onScrollview = ()=>{
    router.navigate("/Scrollview")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <MyButton title='Login' onPress={onLogin}/>
      <MyButton title='Signup' onPress={onSignup}/>
      <MyButton title='Scrollview' onPress={onScrollview}/>
      <MyButton title='FlatList' onPress={()=>{router.navigate("/FlatList")}}/>
      <MyButton title='Leaderboard' onPress={()=>{router.navigate("/Leaderboard")}}/>
      <MyButton title='Modal' onPress={()=>{router.navigate("/Modal")}}/>
      <MyButton title='Tailwind' onPress={()=>{router.navigate("/Tailwind")}}/>
    </View>
  )
}

export default Index