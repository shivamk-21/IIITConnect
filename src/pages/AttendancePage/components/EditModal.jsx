import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../styles/Theme";
import AddModal from "./AddModal";

const EditModal = ({ data, closeModal }) => {
  const [action, setAction] = useState("");

  const actions = [
    { label: "Add Entry", value: "add" },
    { label: "Delete Entry", value: "delete" },
  ];

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
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
            <Text style={styles.modalText}>X</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...styles.modalText,
              top: "6%",
              position: "absolute",
              left: "25%",
            }}
          >
            Edit Attendance
          </Text>
          <Dropdown
            data={actions}
            placeholder="Select Action"
            value={action}
            onChange={(item) => {
              setAction(item.value);
            }}
            placeholderStyle={styles.placeholderStyle}
            labelField="label"
            valueField="value"
            style={styles.selectStatus}
            maxHeight={500}
            containerStyle={styles.selectStatusContainer}
            itemTextStyle={styles.placeholderStyle}
            selectedTextStyle={styles.placeholderStyle}
          />
          {action === "add" && (
            <AddModal close={closeModal} data={data.subjectData.name} />
          )}
        </View>
      </View>
    </Modal>
  );
};



export default EditModal;
