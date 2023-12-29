import React from "react";
import { View, StatusBar } from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Caveat_700Bold } from "@expo-google-fonts/caveat";
import { IBMPlexMono_700Bold } from "@expo-google-fonts/ibm-plex-mono";
import Navigation from "./Navigation";
import { Provider } from "./src/context/Context";

const App = () => {
  let [fontsLoaded] = useFonts({
    Caveat_700Bold,
    Pacifico_400Regular,
    IBMPlexMono_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#1F2B32" barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  }
};

export default App;
