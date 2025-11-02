import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";         // ← navigation after success
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";

type Register2RouteParams = {
  email?: string;
};

export default function Register2() {
  const route = useRoute();
  const router = useRouter();

  // ── form state ────────────────────────────────────────────────
  const { email } = (route.params as Register2RouteParams) || {};
  const [emailInput, setEmailInput] = useState(email || "");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");

  const [passwordVisible, setPasswordVisible]     = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const [password, setPassword]     = useState("");
  const [rePassword, setRePassword] = useState("");

  const [loading, setLoading] = useState(false);
  // ──────────────────────────────────────────────────────────────

  // simple client-side validation
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert("Missing name", "First and Last name are required.");
      return false;
    }
    if (!emailRegex.test(emailInput)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters long.");
      return false;
    }
    if (password !== rePassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return false;
    }
    return true;
  };

  // create account
  const handleCreateAccount = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
     //  await register(firstName, lastName, emailInput, password); // ← API call
      Alert.alert("Success", "Account created successfully!", [
        {
          text: "OK",
          onPress: () => router.replace("/login/login1"), // ← adjust to your login route
        },
      ]);
    } catch (err: any) {
      const message = err?.response?.data?.error || "Registration failed. Please try again.";
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotInactive} />
      </View>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email@example.com"
        placeholderTextColor="#A9A9A9"
        value={emailInput}
        onChangeText={setEmailInput}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* First & Last Name */}
      <View style={styles.nameContainer}>
        <View style={styles.nameField}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#A9A9A9"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.nameField}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#A9A9A9"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      {/* Password */}
      <Text style={styles.label}>Enter Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.toggleText}>{passwordVisible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <Text style={styles.label}>Re-Enter Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Re-Enter Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!rePasswordVisible}
          value={rePassword}
          onChangeText={setRePassword}
        />
        <TouchableOpacity onPress={() => setRePasswordVisible(!rePasswordVisible)}>
          <Text style={styles.toggleText}>{rePasswordVisible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccount}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  progressDotActive: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#F28D35",
    marginHorizontal: 5,
  },
  progressDotInactive: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#A9A9A9",
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  nameField: {
    flex: 1,
    marginHorizontal: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 14,
    color: "#F28D35",
    marginLeft: 10,
  },
  createAccountButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});