import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { TextInput as PaperTextInput } from "react-native-paper";

export default function NameDetails() {
    const router = useRouter();
    const [hidePass, setHidePass] = useState(true);
    const [password, setPassword] = useState('');
    // added some values na so u can just code the idea here

    return(
      <GestureHandlerRootView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.push("../settings")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Delete Account</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.subtitle}>Please enter your password to confirm account deletion. This action is irreversible and will permanently remove all your data from our system.
            </Text>
            <PaperTextInput
                label="Password"
                outlineColor="#8FAF8B"
                activeOutlineColor="#8FAF8B"
                autoCapitalize="none"
                returnKeyType="next"
                mode="outlined"
                secureTextEntry={hidePass ? true : false}
                selectionColor="#8FAF8B"
                value={password}
                onChangeText={setPassword}
                style={{ marginBottom: 20 }}
                right={
                <PaperTextInput.Icon
                    icon="eye"
                    onPress={() => setHidePass(!hidePass)}
                />
                }
            />
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Delete Account</Text>
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
    lineHeight: 22,
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
    backgroundColor: "#db303eff",
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