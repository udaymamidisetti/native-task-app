import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, StackActions } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Footer from "../components/Footer/Footer";
const ProgresScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "black",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 5,
              backgroundColor: "#33aef5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <FontAwesome name="angle-left" color="white" size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
              Daily Progress
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="search" color="white" size={20} />
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
          </View>
        </View>
        <TextInput
          placeholder="Search"
          style={{
            height: 40,
            width: "90%",
            backgroundColor: "#5b5c5b",
            borderRadius: 10,
            color: "white",
            fontSize: 15,
            paddingLeft: 10,
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: "90%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4b4c4d",
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#33aef5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <FontAwesome name="book" color="white" size={20} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Read the lean Startup
          </Text>
          <FontAwesome
            name="angle-right"
            color="white"
            size={20}
            style={{ paddingRight: 10 }}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4b4c4d",
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#7ff564",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <FontAwesome name="bell" color="white" size={20} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Fix Landing Page
          </Text>
          <FontAwesome
            name="angle-right"
            color="white"
            size={20}
            style={{ paddingRight: 10 }}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4b4c4d",
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#ed0ee6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <FontAwesome name="check" color="white" size={20} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Share Prototype With team
          </Text>
          <FontAwesome
            name="angle-right"
            color="white"
            size={20}
            style={{ paddingRight: 10 }}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4b4c4d",
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#f9fc1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <FontAwesome name="square" color="white" size={20} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Reply to Rechard
          </Text>
          <FontAwesome
            name="angle-right"
            color="white"
            size={20}
            style={{ paddingRight: 10 }}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4b4c4d",
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#ed0ee6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <FontAwesome name="check" color="white" size={20} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Finalize pitch Deck
          </Text>
          <FontAwesome
            name="angle-right"
            color="white"
            size={20}
            style={{ paddingRight: 10 }}
          />
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default ProgresScreen;

const styles = StyleSheet.create({});
