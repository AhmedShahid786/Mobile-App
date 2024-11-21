import { View, Text, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { myColors } from "@/constants/Colors";
import profilePic from "../../assets/images/profilePic.jpeg";

export default function Header() {
  return (
    <View
      style={{
        flex: 0.8,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        width: "90%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Image
          source={profilePic}
          style={{
            width: "70%",
            height: "50%",
            borderRadius: 99999,
          }}
        />
      </View>

      <View
        style={{
          flex: 3,
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "grey",
            fontFamily: "SpaceMono",
          }}
        >
          Welcome Back,
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "SpaceMono",
            fontWeight: 600,
          }}
        >
          Ahmed Raza
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="logout"
          size={32}
          color={myColors.colorSecondary}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}
