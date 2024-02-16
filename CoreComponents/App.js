import { View, Text, Image, ImageBackground } from "react-native"
const logoImage =require("./assets/adaptive-icon.png")
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImage} style={{ width: 200, height: 300 }} />
      <Image
        source={{ url: "https://picsum.photos/300"}}
        style={{ width: 200, height: 300 }}
      /> */}
      <ImageBackground
        source={{ url: "https://picsum.photos/300" }}
        style={{ flex: 1 }}
      >
        <Text>IMage Text</Text>
      </ImageBackground>
    </View>
  );
}
