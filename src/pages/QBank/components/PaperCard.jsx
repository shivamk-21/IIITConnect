import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const PaperCard = ({ data, colorData }) => {
  const [fontSize, setFontSize] = useState(25);
  const [blocking, setBlocking] = useState(false);
  const { increaseAccessedPapers } = useConText();

  useEffect(() => {
    const { width: containerWidth } = Dimensions.get("window");
    const maxWidth = 0.7 * containerWidth;

    let currentFontSize = 30;
    let textWidth = currentFontSize * data.subjectName.length * 0.6;

    while (textWidth > maxWidth) {
      currentFontSize -= 1;
      textWidth = currentFontSize * data.subjectName.length * 0.6;
    }

    setFontSize(currentFontSize);
  }, []);

  const handlePress = () => {
    setBlocking(true);
    increaseAccessedPapers();
    Linking.openURL(data.driveLink);
    setBlocking(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.PaperCardBase} onPress={handlePress}>
        <LinearGradient
          colors={[colorData.Primary, colorData.Secondary]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.PaperCard}
        >
          <Text style={{ ...styles.PaperCardName, fontSize }}>
            {data.subjectName}
          </Text>
          <Text style={styles.PaperCardType}>{data.paperType}</Text>
          <Text style={styles.PaperCardSession}>
            {data.session} {data.semester} Sem
          </Text>
          <Text style={styles.PaperCardCode}>{data.subjectCode}</Text>
          <View style={styles.divider} />
        </LinearGradient>
      </TouchableOpacity>
      {blocking && (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
};

export default PaperCard;
