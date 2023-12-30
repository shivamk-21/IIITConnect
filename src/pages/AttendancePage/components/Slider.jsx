import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "../styles/Theme";

const SliderComponent = ({ credits, setCredits }) => {
  const handleValueChange = (value) => {
    setCredits(value);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        step={1}
        value={credits}
        onValueChange={handleValueChange}
        minimumTrackTintColor="transparent" // Set the track color to transparent
        thumbTintColor="transparent"
        maximumTrackTintColor="transparent"
      />
      <View style={styles.SliderFake}>
        <View
          style={{ ...styles.SliderFakeInner, width: `${credits * 25}%` }}
        ></View>
      </View>
    </View>
  );
};

export default SliderComponent;
