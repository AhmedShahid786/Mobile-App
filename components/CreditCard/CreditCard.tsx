import Fontisto from "@expo/vector-icons/Fontisto";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";

interface CreditCardProps {
  balance: string;
  name: string;
  date: string;
  iconName: IconProps<any>["name"];
  colors: [string, string, ...string[]];
}

export default function CreditCard({
  balance,
  name,
  date,
  iconName,
  colors,
}: CreditCardProps) {
  const CreditCardBackground = () => {
    return (
      <LinearGradient
        colors={colors} // Gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 2 }} // Top-left to bottom-right
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: 12,
        }}
      ></LinearGradient>
    );
  };

  return (
    <View
      style={{
        width: "95%",
        height: "90%",
        position: "relative",
        paddingLeft: 6,
        display: "flex",
        borderRadius: 12,
      }}
    >
      <CreditCardBackground />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Fontisto name={iconName} size={24} color="black" />
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "SpaceMono",
            fontWeight: 600,
          }}
        >
          Balance
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "sans-serif",
            fontWeight: 900,
          }}
        >
          ${balance}
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "SpaceMono",
            fontWeight: 600,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontFamily: "sans-serif",
            fontWeight: 900,
            marginRight: 6,
            opacity: 0.7,
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
