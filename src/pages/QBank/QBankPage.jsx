import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles/Theme";
import PaperList from "./components/PaperList";

const QBankPage = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    setIsLoading(true);
    if (subjectCode === "" || subjectCode === "") {
      setFetchedData([]);
      setIsLoading(false);
    } else {
      try {
        const url = new URL(`https://iiit-backend.onrender.com/search`);
        url.searchParams.append("subjectName", subjectName);
        url.searchParams.append("subjectCode", subjectCode);

        setSubjectCode("");
        setSubjectCode("");

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
      <View style={styles.Search}>
        <TextInput
          style={styles.Name}
          placeholder="Subject Name"
          placeholderTextColor="#8C99A0"
          value={subjectName}
          onChangeText={setSubjectName}
        />
        <TextInput
          style={styles.Code}
          placeholder="Subject Code"
          placeholderTextColor="#8C99A0"
          value={subjectCode}
          onChangeText={setSubjectCode}
        />
        <TouchableOpacity style={styles.Button} onPress={handleFetch}>
          <Text style={styles.ButtonText}>Search</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
      </View>
      {!isLoading && fetchedData.data && <PaperList data={fetchedData.data} />}
    </View>
  );
};

export default QBankPage;
