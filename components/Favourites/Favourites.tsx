import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { myColors } from "@/constants/Colors";
import profilePic2 from "../../assets/images/profilePic2.jpg";
import profilePic3 from "../../assets/images/profilePic3.jpg";
import profilePic4 from "../../assets/images/profilePic4.jpg";
import profilePic5 from "../../assets/images/profilePic5.jpg";

const FavPaneData = [profilePic2, profilePic3, profilePic4, profilePic5];

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
        {FavPaneData.map((paneData, i) => (
          <Image
            key={i}
            source={paneData}
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
