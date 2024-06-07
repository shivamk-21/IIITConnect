import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles/Theme";
import PaperList from "./components/PaperList";
import { useConText } from "../../context/Context";
import PopUp from "./components/PopUp";
import {Q_SEARCH} from "@env"

const QBankPage = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const { toggleTabBar, tabBarVisible } = useConText();

  const handlePress = () => {
    toggleTabBar(false);
    setIsShown(true);
  };

  const handleClose = () => {
    toggleTabBar(true);
    setIsShown(false);
  };

  useEffect(() => {
    if (tabBarVisible) {
      setIsShown(false);
    }
  }, [tabBarVisible]);

  const handleFetch = async () => {
    setIsLoading(true);
    if (subjectName === "" && subjectCode === "") {
      setFetchedData([]);
      setIsLoading(false);
    } else {
      try {
        const url = new URL(Q_SEARCH);
        url.searchParams.append("subjectName", subjectName);
        url.searchParams.append("subjectCode", subjectCode);

        setSubjectName("");
        setSubjectCode("");

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2B32" }}>
      <TouchableOpacity style={styles.contribute} onPress={handlePress}>
        <Text style={styles.contributeText}>Contribute</Text>
      </TouchableOpacity>

      {isShown && <PopUp handleClose={handleClose} />}

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
