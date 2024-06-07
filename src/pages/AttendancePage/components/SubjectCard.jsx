// Add import for useState and useEffect if not already imported
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/Theme";
import { useConText } from "../../../context/Context";

const SubjectCard = ({ subjectData, colorData, handlePopUp }) => {
  const { absent, present } = subjectData;
  const total = absent + present;
  const percent = total ? ((present / total) * 100).toFixed(0) : 0;
  const [fontSize, setFontSize] = useState(25);
  const [isShown, setIsShown] = useState(false);
  const [slideAnim] = useState(new Animated.Value(0));

  const { addPresent, addAbsent } = useConText();

  useEffect(() => {
    const { width: containerWidth } = Dimensions.get("window");
    const maxWidth = 0.7 * containerWidth;

    let currentFontSize = 30;
    let textWidth = currentFontSize * subjectData.name.length * 0.6;

    while (textWidth > maxWidth) {
      currentFontSize -= 1;
      textWidth = currentFontSize * subjectData.name.length * 0.6;
    }

    setFontSize(currentFontSize);
  }, []);

  const handlePress = () => {
    if (!isShown) {
      slideIn();
    } else {
      slideOut();
    }
  };

  const slideIn = () => {
    setIsShown(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsShown(false);
    });
  };

  const handleAbsentPress = () => {
    addAbsent(subjectData.name);
  };

  const handlePresentPress = () => {
    addPresent(subjectData.name);
  };

  const handlePopUpLocal = () => {
    setIsShown(false);
    handlePopUp();
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.AttendanceCardBase}
        onPress={handlePress}
        onLongPress={handlePopUpLocal}
      >
        <LinearGradient
          colors={[colorData.Primary, colorData.Secondary]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.AttendanceCard}
        >
          <Text style={{ ...styles.subjectCardName, fontSize }}>
            {subjectData.name}
          </Text>
          <Text style={styles.subjectCardPercent}>{percent} %</Text>
          <View
            style={{
              ...styles.subjectCardBarBase,
              backgroundColor: colorData.SliderPrimary,
            }}
          ></View>
          <View
            style={{
              ...styles.subjectCardBar,
              backgroundColor: colorData.SliderSecondary,
              width: `${percent}%`,
            }}
          ></View>
        </LinearGradient>
      </TouchableOpacity>
      {isShown && (
        <Animated.View
          style={[
            styles.subjectCardSub,
            { backgroundColor: colorData.SliderPrimary },
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            style={{ ...styles.actionButton, left: "3%" }}
            onPress={handleAbsentPress}
          >
            <LinearGradient
              colors={["#FF9797", "#F90000"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.AttendanceCard}
            >
              <Text style={styles.actionButtonText}>Absent</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.actionButton, right: "3%" }}
            onPress={handlePresentPress}
          >
            <LinearGradient
              colors={["#00AD30", "#017E24"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.AttendanceCard}
            >
              <Text style={styles.actionButtonText}>Present</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};

export default SubjectCard;
