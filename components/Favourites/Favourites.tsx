import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { myColors } from "@/constants/Colors";
import profilePic from "../../assets/images/profilePic.jpeg";

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
  {
    iconName: "trending-up",
    title: "Stocks",
  },
];

export default function Favourites() {
  return (
    <View
      style={{
        flex: 1.5,
        alignItems: "flex-start",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <View
        style={{
          width: "100%",
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
          Favourites
        </Text>

        <AntDesign
          name="pluscircleo"
          size={32}
          color={myColors.colorSecondary}
        />
      </View>

      <View
        style={{
          width: "100%",
          flex: 2,
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        {actionPaneData.map((paneData, i) => (
          <Image
            source={profilePic}
            style={{
              width: "20%",
              height: "60%",
              borderWidth: 2,
              borderColor: myColors.colorSecondary,
              borderRadius: 99999,
            }}
          />
        ))}
      </View>
    </View>
  );
}
