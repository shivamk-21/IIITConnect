import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/GlobalLight";
import { useConText } from "../../../context/Context";

const QuoteCard = () => {
  const { quoteData, loading } = useConText();

  return (
    <View style={styles.quoteCardBase}>
      {loading ? (
        <LinearGradient
          colors={["#81ACFF", "#0057FF"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.userStatCard}
        >
          <Text style={styles.quoteCardText}>Loading...</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#81ACFF", "#0057FF"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.userStatCard}
        >
          <Text style={styles.quoteCardText}>Quote Of The Day</Text>
          <Text style={styles.quoteCardText2}>
            {quoteData.quote + "\n"} - {quoteData.author}
          </Text>
        </LinearGradient>
      )}
    </View>
  );
};

export default QuoteCard;
