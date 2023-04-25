import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ProgressBarAndroidBase,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Swiper from "react-native-deck-swiper";
const appData = [
  {
    id: 1,
    appname: "Stony Brook Univ",
    result: "Waiting for result",
  },
  {
    id: 2,
    appname: "New YorK City",
    result: "Waiting for result",
  },
  {
    id: 3,
    appname: "San Jose State Univ",
    result: "Waiting for result",
  },
];

const Data = [
  {
    id: 1,
    name: "Stony Brook Univ",
    Para: "Here you can see your upcoming tasks and application progress",
    progress: 0.75,
  },
  {
    id: 2,
    name: "Stony Brook Univ",
    Para: "Here you can see your upcoming tasks and application progress",
    progress: 0.75,
  },
  {
    id: 3,
    name: "Stony Brook Univ",
    Para: "Here you can see your upcoming tasks and application progress",
    progress: 0.75,
  },
];
const TabsView = () => {
  const [selected, setSelected] = useState("1");
  const handleItemClick = (item) => {
    setSelected(item);
  };
  return (
    <View>
      <ScrollView style={styles.TabBar} horizontal>
        <Text
          style={{
            textAlign: "center",
            height: 35,
            borderRadius: 50,
            width: 200,
            color: selected === "1" ? "white" : "gray",
            fontWeight: "bold",
            backgroundColor: selected === "1" ? "#07b7f7" : "transparent",
            paddingTop: 6,
          }}
          onPress={() => handleItemClick("1")}
        >
          Overview
        </Text>
        <Text
          style={{
            textAlign: "center",
            height: 35,
            borderRadius: 50,
            width: 200,
            color: selected === "2" ? "white" : "gray",
            fontWeight: "bold",
            backgroundColor: selected === "2" ? "#07b7f7" : "transparent",
            paddingTop: 6,
          }}
          onPress={() => handleItemClick("2")}
        >
          Applications
        </Text>
        <Text
          style={{
            textAlign: "center",
            height: 35,
            borderRadius: 50,
            width: 200,
            color: selected === "3" ? "white" : "gray",
            fontWeight: "bold",
            backgroundColor: selected === "3" ? "#07b7f7" : "transparent",
            paddingTop: 6,
          }}
          onPress={() => handleItemClick("3")}
        >
          Results
        </Text>
      </ScrollView>
      {selected === "1" && (
        <>
          <View style={{ marginTop: 30 }}>
            <Swiper
              cardStyle={{
                top: 0,
                height: 10,
              }}
              style={{ height: 150 }}
              cards={Data}
              stackSize={3}
              cardIndex={0}
              animateCardOpacity
              verticalSwipe={false}
              renderCard={(card) => (
                <View
                  key={card.id}
                  style={{
                    backgroundColor: "#5e5d5c",
                    height: 150,
                    borderRadius: 25,
                    // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 20,
                      paddingTop: 20,
                      paddingLeft: 10,
                    }}
                  >
                    {card.name}
                  </Text>
                  <Text
                    style={{ color: "white", paddingTop: 10, paddingLeft: 10 }}
                  >
                    {card.Para}
                  </Text>
                  {/* <ProgressBarAndroidBase
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={card.progress}
                  color="#2196F3"
                /> */}
                </View>
              )}
            />
          </View>
          <View style={{ marginTop: 170 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 20,
                marginLeft: 20,
              }}
            >
              Categories
            </Text>
            <View
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#5e5d5c",
                  height: 150,
                  width: 160,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "#30cfff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="book" color="white" size={20} />
                </View>
                <Text style={{ color: "#edf1f2", fontSize: 18, marginTop: 5 }}>
                  5 New
                </Text>
                <Text style={{ color: "white", fontSize: 25 }}>SOP, LOR</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#5e5d5c",
                  height: 150,
                  width: 160,
                  borderRadius: 10,
                  paddingLeft: 10,

                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "#f7ec11",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="square" color="white" size={20} />
                </View>
                <Text style={{ color: "#edf1f2", fontSize: 18, marginTop: 5 }}>
                  2 New
                </Text>
                <Text style={{ color: "white", fontSize: 25 }}>Emails</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#5e5d5c",
                  height: 150,
                  width: 160,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "#f711e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="check" color="white" size={20} />
                </View>
                <Text style={{ color: "#edf1f2", fontSize: 18, marginTop: 5 }}>
                  9 New
                </Text>
                <Text style={{ color: "white", fontSize: 25 }}>Documents</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#5e5d5c",
                  height: 150,
                  width: 160,
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginTop: 10,
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
                <Text style={{ color: "#edf1f2", fontSize: 18, marginTop: 5 }}>
                  5 New
                </Text>
                <Text style={{ color: "white", fontSize: 25 }}>Urgent</Text>
              </View>
            </View>
          </View>
        </>
      )}
      {selected === "2" && (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {appData.map((e) => (
            <View
              key={e.id}
              style={{
                height: 150,
                backgroundColor: "#4f4f4d",
                marginTop: 15,
                borderRadius: 30,
                width: "90%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingLeft: 30,
                  paddingTop: 20,
                }}
              >
                {e.appname}
              </Text>
              <Text style={{ color: "white", paddingLeft: 30, paddingTop: 10 }}>
                {e.result}
              </Text>
            </View>
          ))}
        </View>
      )}
      {selected === "3" && (
        <View>{/* <Text style={{ color: "white" }}>3</Text> */}</View>
      )}
    </View>
  );
};

export default TabsView;

const styles = StyleSheet.create({
  TabBar: {
    // width: "95%",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // margin: "auto",
    marginTop: 15,
    marginLeft: 20,
  },
});
