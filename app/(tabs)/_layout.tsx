import React from "react";
import { View, Text, Image } from "react-native";
import { myColors } from "@/constants/Colors";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Actions from "@/components/Actions/Actions";
import Favourites from "@/components/Favourites/Favourites";
import Tabs from "@/components/Tabs/Tabs";

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
      <Actions />
      <Favourites />
      <Tabs />
    </View>
  );
}
