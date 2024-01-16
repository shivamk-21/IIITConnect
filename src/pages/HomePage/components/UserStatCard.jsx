import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/GlobalLight";
import { LinearGradient } from "expo-linear-gradient";

const UserStatCard = () => {
  return (
    <View style={styles.userStatCardBase}>
      <LinearGradient
        colors={["rgb(172,38,252)", "rgb(212,165,252)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.userStatCard}
      >
        <Text style={styles.userStatCardText}>B.Tech in DSAI</Text>
        <Text style={styles.userStatCardText2}>Semester 5</Text>
        <Image
          source={require("../../../assets/boy.png")}
          style={styles.userStatCardImage}
        />
      </LinearGradient>
    </View>
  );
};

export default UserStatCard;
