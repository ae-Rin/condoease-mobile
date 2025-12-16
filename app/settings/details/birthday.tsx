import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-date-picker';
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";



export default function BirthdayDetails() {
    const router = useRouter();
    const [date, setDate] = useState(new Date());
      const [open, setOpen] = useState(false);
    // added some values na so u can just code the idea here

    return(
      <GestureHandlerRootView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.push("../settings")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Date of Birth</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.subtitle}>Your birthday will be visible to Property Managers.
            </Text>
            <View style={styles.card}>
                <Text>Selected Birthday: {date.toLocaleDateString()}</Text>
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => setOpen(true)}>
                <Text style={styles.saveButtonText}>Select Birthday</Text>
            </TouchableOpacity>
            
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date" // Essential for date selection
                onConfirm={(selectedDate) => {
                setOpen(false);
                setDate(selectedDate);
                }}
                onCancel={() => {
                setOpen(false);
                }}
                maximumDate={new Date()} // Optional: Prevent future dates for birthdays
            />

            {/* save btn */}
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
        </GestureHandlerRootView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    },
    header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    margin:20
  },
  menuButton: {
    height: 35,
    width: 35,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#8FAF8B",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:"bold",
    color: "#333",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectButton: {
    backgroundColor: "#8FAF8B",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});