import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register3() {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotActive} />
      </View>

      {/* Verification Section */}
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.description}>
        An email has been sent to t********l@gmail.com with a confirmation code.
      </Text>

      {/* Verification Code Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        placeholderTextColor="#A9A9A9"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      {/* Verify Email Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify Email</Text>
      </TouchableOpacity>

      {/* Resend Code Button */}
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendButtonText}>Resend Code</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resendButton: {
    alignItems: "center",
  },
  resendButtonText: {
    color: "#F28D35",
    fontSize: 16,
    fontWeight: "bold",
  },
});