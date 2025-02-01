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

const Signup = () => {
  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={{ flex: 1, padding: 20, gap: 20 }}>
          <Image
            source={require("@/assets/images/shambhu.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
            resizeMethod="auto"
            resizeMode="cover"
          />
          <TextInput
            placeholder="Enter your email"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
            textContentType="emailAddress"
            inputMode="email"
          />
          <TextInput
            placeholder="Enter your name"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
          />
          <TextInput
            placeholder="Enter your phone number"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Enter your address"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
          />
          <TextInput
            placeholder="Enter your city"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
          />
          <TextInput
            placeholder="Enter your state"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
          />
          <TextInput
            placeholder="Enter your country"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
          />
          <TextInput
            placeholder="Enter your postal code"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="Enter your password"
            style={{ borderWidth: 1, paddingHorizontal: 20 }}
            secureTextEntry={true}
          />
          <Button
            title="Signup"
            onPress={() => {
              console.log("LoggedIN");
            }}
          />
        </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAwareScrollView>
  );
};

export default Signup;
