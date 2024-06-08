import React, { useEffect, useState } from "react";
import { Text, Image, View, Dimensions } from "react-native";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const UserCard = () => {
  const [fontSize, setFontSize] = useState(30);
  const { userInfo } = useConText();
  const textContent = "Hello" + userInfo.name + "!";

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
    <View style={styles.userCardBase}>
      <Image
        source={{
          uri: userInfo.photo.substring(0, userInfo.photo.lastIndexOf("=")),
        }}
        style={styles.displayPicture}
      />
      <Text style={[styles.userCardText, { fontSize: fontSize }]}>
        {textContent}
      </Text>
    </View>
  );
};

export default UserCard;
