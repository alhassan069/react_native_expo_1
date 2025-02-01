import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("calling")
  }, []);  
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 24, flex: 1, justifyContent: "center" }}>
          <Image
            source={require("@/assets/images/shambhu.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
            resizeMethod="auto"
            resizeMode="cover"
          />
          <View style={{ padding: 20, gap: 20 }}>
            <TextInput
              placeholder="Enter your email"
              style={{ borderWidth: 1, paddingHorizontal: 20 }}
              textContentType="emailAddress"
              inputMode="email"
              onChangeText={(e) => setValue(prev=>({ ...prev, email: e }))}
            />
            <TextInput
              placeholder="Enter your password"
              style={{ borderWidth: 1, paddingHorizontal: 20 }}
              secureTextEntry={true}
              onChangeText={(e) =>
                setValue(prev =>({ ...prev, password: e }))
              }
            />
            <Text>{value.email}</Text>
            <Text>{value.password}</Text>
            <Button title="Login" onPress={() => {console.log(value)}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
