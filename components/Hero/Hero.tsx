import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import CreditCard from "../CreditCard/CreditCard";

export default function Hero() {
  return (
    <View
      style={{
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading View */}
      <View
        style={{
          width: "90%",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "SpaceMono",
            fontWeight: 600,
          }}
        >
          Cards
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "grey",
              fontFamily: "SpaceMono",
              marginBottom: 3,
            }}
          >
            Add New
          </Text>

          <AntDesign name="pluscircleo" size={16} color="black" />
        </View>
      </View>

      {/* Card View */}
      <View
        style={{
          flex: 4,
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <CreditCard
            iconName="mastercard"
            balance="26,500"
            name="Ahmed Raza"
            date="12/26"
            colors={["#FFD700", "#FFB347", "#FFFACD"]}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <CreditCard
            iconName="visa"
            balance="1,260"
            name="Ahmed"
            date="8/25"
            colors={["#6A67E9", "#8E8BF2", "#A8A5F7"]}
          />
        </View>
      </View>
    </View>
  );
}
