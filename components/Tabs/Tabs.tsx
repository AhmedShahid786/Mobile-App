import { View } from "react-native";
import TabPane from "../TabPane/TabPane";
import { myColors } from "@/constants/Colors";

const tabPaneData = [
  {
    iconName: "home",
    title: "Home",
  },
  {
    iconName: "wallet",
    title: "Wallet",
  },
  {
    iconName: "qrcode-scan",
    title: "Scan",
  },
  {
    iconName: "account",
    title: "My Account",
  },
];

export default function Tabs() {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        borderWidth: 2,
        borderTopColor: myColors.colorSecondary,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      {tabPaneData.map((paneData, i) => (
        <TabPane key={i} iconName={paneData.iconName} title={paneData.title} />
      ))}
    </View>
  );
}
