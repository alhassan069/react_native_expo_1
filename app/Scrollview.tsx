import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";

const ScrollviewCont = () => {
  return (
    <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((item, index) => (
          <View key={index} style={{ padding: 20, height:100, width:"100%", marginBottom:5, backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightcoral' }}>
            <Text>{item}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
};

export default ScrollviewCont;
