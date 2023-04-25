import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <FontAwesome name="bars" color="white" size={25} />
          </TouchableOpacity>
          <View style={styles.rightSide}>
            <TouchableOpacity>
              <Text style={styles.name}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="search" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={{
                  uri: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bell" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ width: "95%" }}>
        <Text style={styles.userName}>Hello</Text>
        <Text style={styles.userName}>Erlich Bachman</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "95%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  rightSide: {
    display: "flex",
    gap: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    color: "white",
    fontSize: 25,
    textAlign: "right",
    marginTop: 10,
  },
});
