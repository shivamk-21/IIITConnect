import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const EditModal = ({ data, closeModal }) => {
  const [action, setAction] = useState("add");
  const [status, setStatus] = useState();
  const [selectedEntry, setSelectedEntry] = useState("");
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const renderRemoveDropdown = () => {
    const entries = [
      ...data.subjectData.absent.map((date) => ({ type: "absent", date })),
      ...data.subjectData.present.map((date) => ({ type: "present", date })),
    ];

    return (
      <Picker
        selectedValue={selectedEntry}
        onValueChange={(itemValue) => setSelectedEntry(itemValue)}
      >
        {entries.map((entry, index) => (
          <Picker.Item
            key={index}
            label={`${entry.type === "absent" ? "Absent" : "Present"}: ${
              entry.date
            }`}
            value={`${entry.type}:${entry.date}`}
          />
        ))}
      </Picker>
    );
  };

  const renderAddOptions = () => (
    <View>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Absent" value="absent" />
        <Picker.Item label="Present" value="present" />
      </Picker>
      <Text>Select Date</Text>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={closeModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text>Edit Subject</Text>
          <Picker
            style={{ backgroundColor:"red"}}
            selectedValue={action}
            onValueChange={(itemValue,itemIndex) => setAction(itemValue)}
          >
            <Picker.Item label="Add" value="add" />
            <Picker.Item label="Remove" value="remove" />
          </Picker>
          {action === "remove" && renderRemoveDropdown()}
          {action === "add" && renderAddOptions()}
          <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
