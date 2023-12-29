import { View, TouchableOpacity, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/Theme";

const Slider = () => {
  const [slider, setSlider] = useState("5%");
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  const animateSlider = () => {
    setIsAnimating(true); // Start animation, disable TouchableOpacity
    const totalAnimationTime = 0.3; // Total animation time in seconds
    const framesPerSecond = 60; // Assuming 60 frames per second for smooth animation
    const totalFrames = totalAnimationTime * framesPerSecond;

    let initialValue = 0;
    let finalValue = 0;
    let step = 0;

    if (parseFloat(slider) < 5.2) {
      initialValue = 5;
      finalValue = 65;
      step = (finalValue - initialValue) / totalFrames; // Calculate step size
    } else {
      initialValue = 65;
      finalValue = 5;
      step = (finalValue - initialValue) / totalFrames; // Calculate step size
    }

    const intervalDuration = (totalAnimationTime / totalFrames) * 1000; // Convert to milliseconds

    const timer = setInterval(() => {
      initialValue += step;

      if (
        (step > 0 && initialValue >= finalValue) ||
        (step < 0 && initialValue <= finalValue)
      ) {
        clearInterval(timer);
        setIsAnimating(false); // Animation completed, enable TouchableOpacity
      }

      setSlider(`${initialValue}%`);
    }, intervalDuration);
  };

  const animatedStyles = {
    left: slider,
  };

  return (
    <TouchableOpacity style={styles.Slider} onPress={isAnimating ? null : animateSlider} disabled={isAnimating}>
      <View style={{ ...styles.SliderBall, left: slider }} />
    </TouchableOpacity>
  );
};

export default Slider;
