import { View, Text } from "react-native";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { myColors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface TabPaneProps {
  iconName: IconProps<any>["name"];
  title: string;
}

export default function TabPane({ iconName, title }: TabPaneProps) {
  return (
    <View
      style={{
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        borderRadius: 8,
        borderColor: myColors.colorSecondary,
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        color={myColors.colorSecondary}
        size={24}
      />
      <Text
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: "SpaceMono",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
