import { View, Text } from "react-native";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { myColors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

interface ActionPaneProps {
  iconName: IconProps<any>["name"];
  title: string;
}

export default function ActionPane({ iconName, title }: ActionPaneProps) {
  return (
    <View
      style={{
        width: "26%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: myColors.colorSecondary,
      }}
    >
      <Feather name={iconName} color={myColors.colorSecondary} size={24} />
      <Text
        style={{
          fontSize: 14,
          fontFamily: "sans-serif",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
