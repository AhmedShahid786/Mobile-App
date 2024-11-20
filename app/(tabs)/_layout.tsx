import React from "react";
import { View, Text, Image } from "react-native";
import { myColors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import profilePic from "../../assets/images/profilePic.jpeg";

export default function TabLayout() {
  return (
    <View
      style={{
        backgroundColor: myColors.colorMain,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* Header View Start*/}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderWidth: 2,
          borderColor: myColors.colorSecondary,
          width: "90%",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={profilePic}
            style={{
              width: "65%",
              height: "40%",
              borderRadius: 99999,
            }}
          />
        </View>

        <View
          style={{
            flex: 2,
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 4,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "grey",
              fontFamily: "SpaceMono",
            }}
          >
            Welcome Back,
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "SpaceMono",
              fontWeight: 600,
            }}
          >
            Ahmed Raza
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="logout"
            size={32}
            color={myColors.colorSecondary}
            style={{ marginTop: 20 }}
          />
          {/* <Text
            style={{
              fontSize: 10,
              color: "grey",
              fontFamily: "",
            }}
          >
            Logout
          </Text> */}
        </View>
      </View>
      {/* HEader View End */}

      <View
        style={{
          flex: 3,
          borderWidth: 2,
          borderColor: myColors.colorSecondary,
          width: "90%",
        }}
      ></View>
      <View
        style={{
          flex: 2,
          borderWidth: 2,
          borderColor: myColors.colorSecondary,
          width: "90%",
        }}
      ></View>
    </View>
  );
}
