import { IconSymbol } from "@/components/ui/IconSymbol";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";



export default function IDDetails() {
    const router = useRouter();
    // for file attachment, also i used the same code from maintenance.tsx
    const [attachment, setAttachment] = useState<{ uri: string; type?: string } | null>(null); // file object
    const [selectedID, setSelectedID] = useState("id-type");
    

    const pickFile = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 0.8,
        });
    
        if (!result.canceled) {
          setAttachment(result.assets[0]);
        }
      };

    // added some values na so u can just code the idea here

    return(
      <GestureHandlerRootView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.push("../settings")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Tenant ID</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.subtitle}>Your ID will only be visible to Property Managers.
            </Text>
            <Text style={styles.label}>Type of ID</Text>
            <View style={styles.dropdown}>
                <Picker
                    selectedValue={selectedID}
                    onValueChange={setSelectedID}
                >
                    <Picker.Item label="Passport" value="passport" />
                    <Picker.Item label="Driver’s License" value="driver" />
                    <Picker.Item label="SSS ID" value="sss" />
                    <Picker.Item label="Pag-ibig ID" value="pagibig" />
                    <Picker.Item label="Voter’s ID" value="voters" />
                    <Picker.Item label="e-Card / UMID" value="umid" />
                    <Picker.Item label="Phil-health ID" value="philhealth" />
                    <Picker.Item label="Person’s With Disability (PWD) ID" value="pwd" />
                    <Picker.Item label="Senior Citizen ID" value="senior" />
                </Picker>
            </View>

            <Text style={styles.label}>Upload ID</Text>
                <TouchableOpacity style={styles.fileButton} onPress={pickFile}>
                    <Text style={styles.fileButtonText}>Choose File</Text>
                </TouchableOpacity>
                <View style={styles.filePreview}>
                    {attachment ? (
                        <Image source={{ uri: attachment.uri }} style={{ width: 200, height: 200 }} />
                    ) : (
                        <Text style={styles.filePreviewText}>No attached files</Text>
                    )}
                </View>

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
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fileButton: {
    backgroundColor: "#F28D35",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  fileButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  filePreview: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  filePreviewText: {
    color: "#666",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
    marginBottom: 20,
  },
});