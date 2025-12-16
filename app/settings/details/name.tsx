import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView, TextInput } from "react-native-gesture-handler";


export default function NameDetails() {
    const router = useRouter();
    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState(""); 
    // added some values na so u can just code the idea here

    return(
      <GestureHandlerRootView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.push("../settings")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Name</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.subtitle}>Your name will be visible to Property Managers.
            </Text>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} 
            placeholder="Enter First Name"
            value={firstname}
            onChangeText={setFirstname}/>

            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} 
            placeholder="Enter Last Name"
            value={lastname}
            onChangeText={setLastname}/>
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
});