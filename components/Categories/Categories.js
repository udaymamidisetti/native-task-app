import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Categories = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          paddingLeft: 10,
          paddingTop: 20,
        }}
      >
        Categories
      </Text>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
