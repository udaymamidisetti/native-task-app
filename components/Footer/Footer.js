import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation, StackActions } from "@react-navigation/native";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 50,
        right: 50,
      }}
    >
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" color="white" size={20} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#21bcff",
            height: 60,
            width: 60,
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="plus" color="white" size={25} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <FontAwesome name="clipboard" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
