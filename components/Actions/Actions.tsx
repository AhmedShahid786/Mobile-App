import { View } from "react-native";
import { myColors } from "@/constants/Colors";
import ActionPane from "../ActionPane/ActionPane";

const actionPaneData = [
  {
    iconName: "send",
    title: "Send",
  },
  {
    iconName: "arrow-down-left",
    title: "Recieve",
  },
  {
    iconName: "trending-up",
    title: "Stocks",
  },
];

export default function Actions() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
      }}
    >
      {actionPaneData.map((paneData, i) => (
        <ActionPane
          key={i}
          iconName={paneData.iconName}
          title={paneData.title}
        />
      ))}
    </View>
  );
}
