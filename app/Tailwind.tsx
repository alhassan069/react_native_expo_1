import { View, Text } from 'react-native'
import React from 'react'

const TailwindComponent = () => {
  return (
    <View className='flex-1 justify-center items-center bg-orange-200'>
      <Text className='font-bold text-lg text-red-400 '>TailwindComponent</Text>
    </View>
  )
}

export default TailwindComponent