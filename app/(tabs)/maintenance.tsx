import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator, 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MaintenanceRequest() {
  const [selectedMaintenanceType, setSelectedMaintenanceType] = useState("emergency");
  const [selectedCategory, setSelectedCategory] = useState("water-leaks");
  const [description, setDescription] = useState(""); 
  const [attachment, setAttachment] = useState<{ uri: string; type?: string } | null>(null); // file object
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const pickFile = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setAttachment(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      Alert.alert("Error", "You must be logged in to submit a request.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("maintenance_type", selectedMaintenanceType);
    formData.append("category", selectedCategory);
    formData.append("description", description);

    if (attachment) {
      const fileUri = attachment.uri;
      const fileName = fileUri.split("/").pop();
      const fileType = attachment.type === "video" ? "video/mp4" : "image/jpeg";
      formData.append("files", {
        uri: fileUri,
        name: fileName,
        type: fileType,
      } as any);
    }

    try {
      const response = await fetch(`${apiUrl}/api/maintenance-requests`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      if (response.ok) {
        Alert.alert("Success", "Your maintenance request has been submitted!");
        setDescription("");
        setAttachment(null);
      } else {
        const errorText = await response.text();
        console.error("Error:", errorText);
        Alert.alert("Error", "Failed to submit the maintenance request.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred while submitting the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request Maintenance</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Types of Maintenance:</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedMaintenanceType}
            onValueChange={setSelectedMaintenanceType}
          >
            <Picker.Item label="Emergency Maintenance" value="emergency" />
            <Picker.Item label="Routine Maintenance" value="routine" />
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Category:</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <Picker.Item label="Water Leaks / Flooding" value="water-leaks" />
            <Picker.Item label="Electrical Issues" value="electrical" />
            <Picker.Item label="Structural Damage" value="structural" />
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Describe the issue in detail..."
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Image / Video Attachment:</Text>
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
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Send Request</Text>
          )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },
  fileButton: {
    backgroundColor: "#FFA500",
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
    borderColor: "#90EE90",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  filePreviewText: {
    color: "#666",
  },
  submitButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
