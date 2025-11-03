import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
//import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updateEmail } from 'firebase/auth';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { TextInput as PaperTextInput } from "react-native-paper";

export default function EmailDetails() {
    const router = useRouter();
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // papalitan pa to ng tama, di ko alam if eto talaga gamit mo :DDD

    // const auth = getAuth();

    // async function handleSaveChanges(currentPassword: string, newEmail:string) {
    // const user = auth.currentUser;

    // if (!user || !user.email) return;

    // const credential = EmailAuthProvider.credential(user.email, currentPassword);

    // try {
    //     await reauthenticateWithCredential(user, credential);
    //     await updateEmail(user, newEmail);

    //     alert('Email updated successfully!');
    // } catch (error) {
    //     console.error('Error updating email:', error);
    //     alert('Failed to update email. Please check your password.');
    // }
    // }


    // added some values na so u can just code the idea here

    return(
      <GestureHandlerRootView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.push("../settings")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Email</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.subtitle}>Your email will be visible to Property Managers.
            </Text>
            <PaperTextInput
            label="Email"
            outlineColor="#8FAF8B"
            activeOutlineColor="#8FAF8B"
            autoCapitalize="none"
            returnKeyType="next"
            mode="outlined"
            selectionColor="#8FAF8B"
            style={{ marginBottom: 20 }}
            value={email}
            onChangeText={setEmail}
          />

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
        <TouchableOpacity style={styles.saveButton} 
        onPress={()=>{
          // USED HERE HELLO IM HERE
            // handleSaveChanges(password, email)
        }}>
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