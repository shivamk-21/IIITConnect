import React, { useEffect, useState } from "react";
import { Text, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "../styles/GlobalLight";

const userCard = ({ onclick }) => {
  const [fontSize, setFontSize] = useState(30);
  const textContent = "Hello Shivam!";

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      Dimensions.get("window");
    const maxWidth = 0.75 * containerWidth;
    const maxHeight = 0.1 * containerHeight;

    let currentFontSize = 30;
    let textWidth = currentFontSize * textContent.length * 0.6;

    while (textWidth > maxWidth || currentFontSize * 1.2 > maxHeight) {
      currentFontSize -= 1;
      textWidth = currentFontSize * textContent.length * 0.6;
    }

    setFontSize(currentFontSize);
  }, []);

  return (
    <TouchableOpacity style={styles.userCard} onPress={onclick}>
      <Image
        source={require("../../../devAssets/dp.jpg")}
        style={styles.displayPicture}
      />
      <Text style={[styles.userCardText, { fontSize: fontSize }]}>
        {textContent}
      </Text>
    </TouchableOpacity>
  );
};

export default userCard;
