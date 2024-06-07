import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles/Theme";
import ContactList from "./components/ContactList";
import { Dropdown } from "react-native-element-dropdown";
import ENV_VAR from "../../../env"

const QBankPage = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const departments = [
    { label: "CSE", value: "CSE" },
    { label: "DSAI", value: "DSAI" },
    { label: "ECE", value: "ECE" },
    { label: "Other", value: "Other" },
  ];
  const statuses = [
    { label: "Student", value: "Student" },
    { label: "Professor", value: "Professor" },
    { label: "Hostel", value: "Hostel" },
    { label: "Maintenance", value: "Maintenance" },
    { label: "Office", value: "Office" },
    { label: "Other", value: "Other" },
  ];

  const handleReset = () => {
    setName("");
    setNumber("");
    setDepartment("");
    setStatus("");
    setFetchedData([]);
  };

  const handleFetch = async () => {
    setIsLoading(true);
    if (Name === "" && Number === "" && department === "" && status === "") {
      setFetchedData([]);
      setIsLoading(false);
    } else {
      try {
        const url = new URL(ENV_VAR.CONTACT_SEARCH);
        url.searchParams.append("name", Name);
        url.searchParams.append("type", status);
        url.searchParams.append("department", department);
        url.searchParams.append("number", Number);

        setName("");
        setNumber("");
        setDepartment("");
        setStatus("");

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
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
      <View style={styles.Search}>
        <TextInput
          style={styles.Name}
          placeholder="Name"
          placeholderTextColor="#8C99A0"
          value={Name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.Code}
          placeholder="Number"
          placeholderTextColor="#8C99A0"
          value={Number}
          onChangeText={setNumber}
        />
        <TouchableOpacity style={styles.ResetButton} onPress={handleReset}>
          <Text style={styles.ButtonText}> 🗑 </Text>
        </TouchableOpacity>
        <Dropdown
          data={departments}
          placeholder="Department"
          value={department}
          onChange={(item) => {
            setDepartment(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{
            ...styles.selectStatus,
            left: "2.5%",
            borderBottomLeftRadius: 40,
          }}
          maxHeight={500}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
        />
        <Dropdown
          data={statuses}
          placeholder="Status"
          value={status}
          onChange={(item) => {
            setStatus(item.value);
          }}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          valueField="value"
          style={{ ...styles.selectStatus }}
          maxHeight={500}
          containerStyle={styles.selectStatusContainer}
          itemTextStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
        />

        <TouchableOpacity style={styles.Button} onPress={handleFetch}>
          <Text style={styles.ButtonText}> &#128269; </Text>
        </TouchableOpacity>
        <View style={styles.hr} />
      </View>
      {!isLoading && fetchedData.filteredData && (
        <ContactList data={fetchedData.filteredData} />
      )}
    </View>
  );
};

export default QBankPage;
