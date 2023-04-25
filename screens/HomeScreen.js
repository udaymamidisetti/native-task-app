import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/HomescreenCom/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import TabsView from "../components/TabsView/TabsView";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "black", height: "100%", color: "white" }}
    >
      <Header />
      <TabsView />
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
