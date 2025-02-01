import { View, ScrollView, Text, FlatList } from "react-native";
import React from "react";

const FlatListCont = () => {
  return (
    <FlatList
      data={Array.from({ length: 100 }, (_, i) => i + 1)}
      numColumns={3}
      ListHeaderComponent={<View style={{ height: 200, backgroundColor: "green" }}><Text>Header</Text></View>}
      ListFooterComponent={<View style={{ height: 200, backgroundColor: "red" }}><Text>Header</Text></View>}
      contentContainerStyle={{ marginTop: 20 }}
      renderItem={({ item, index }) => {
        return (
          <View
            key={index}
            style={{
              padding: 20,
              height: 100,
              width: 100,
              marginRight: 20,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: index % 2 === 0 ? "lightblue" : "lightcoral",
            }}
          >
            <Text>{item}</Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default FlatListCont;
