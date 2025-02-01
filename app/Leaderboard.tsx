import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Data from "@/data.json";

const Leaderboard = () => {
  React.useEffect(() => {
    console.log("RENDERED");
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <View style={styles.mainCardContainer}>
          {[Data[2], Data[0], Data[1]].map((el, index) => (
            <View
              key={index}
              style={[
                styles.mainCard,
                index === 1
                  ? { backgroundColor: "gold" }
                  : index === 2
                  ? { marginTop: 10, backgroundColor: "silver" }
                  : index === 0
                  ? { marginTop: 20, backgroundColor: "#CD7F32" }
                  : {},
              ]}
            >
              <Image
                source={{ uri: el.picture }}
                style={styles.mainCardImage}
                resizeMode="cover"
              />
              <Text style={[styles.mainCardTitle]}>
                {el.name.split(" ")[0] || el.name}
              </Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankText}>{el.rank}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listCard}>
              <View style={styles.listCardRankContainer}>
                <Text style={styles.listCardRankText}>{item.rank}</Text>
              </View>
              <View style={styles.listCardDataContainer}>
                <Image
                  source={{ uri: item.picture }}
                  style={styles.listCardImage}
                  resizeMode="cover"
                />
                <Text style={styles.listCardTitle}>{item.name}</Text>
              </View>
              
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  headerContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  mainCard: {
    backgroundColor: "#272C35",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -23,
  },
  mainCardRankText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2C303A",
    gap: 40,
  },
  listCardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
  },
  listCardImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  listCardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listCardRankContainer: {},
  listCardRankText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Leaderboard;
