import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Theme";
import ContactCard from "../components/ContactCard";

const ContactList = ({ data }) => {
  return (
    <>
      <View style={styles.ContactList}>
        <ScrollView>
          {data.map((Item, index) => {
            return (
              <>
                <ContactCard key={index} data={Item} />
                {index < data.length - 1 && (
                  <View style={styles.Divider} />
                )}
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default ContactList;
