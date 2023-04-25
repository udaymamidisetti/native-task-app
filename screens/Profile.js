import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer/Footer";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#303233",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          source={{
            uri: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            textDecorationLine: "underline",
            marginTop: 10,
          }}
        >
          udaybalram416@gmail.com
        </Text>
        <TouchableOpacity
          style={{
            color: "white",
            backgroundColor: "#2dbcfa",
            height: 40,
            width: 150,
            borderRadius: 50,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: 10,
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: 20,
            color: "#acadad",
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          Notifications
        </Text>
        <View
          style={{
            width: "90%",
            height: 80,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#898b8c",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
              paddingLeft: 10,
            }}
          >
            Turn on Notifications
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: 20,
            color: "#acadad",
            fontWeight: "500",
            fontSize: 15,
            marginTop: 20,
          }}
        >
          Invite Link
        </Text>
        <View
          style={{
            width: "90%",
            height: 80,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#898b8c",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
              paddingLeft: 10,
            }}
          >
            Invite People
          </Text>
          <TouchableOpacity
            style={{
              color: "white",
              backgroundColor: "#2dbcfa",
              height: 40,
              width: 100,
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Invite
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "#acadad",
            fontWeight: "700",
            fontSize: 15,
            marginTop: 50,
          }}
        >
          Logout
        </Text>

        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
