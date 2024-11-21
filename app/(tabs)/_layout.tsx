import React from "react";
import { View, Text, Image } from "react-native";
import { myColors } from "@/constants/Colors";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

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
      <Header />
      <Hero />

      <View
        style={{
          flex: 3,
          borderWidth: 2,
          borderColor: myColors.colorSecondary,
          width: "90%",
        }}
      ></View>
    </View>
  );
}
