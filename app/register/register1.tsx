import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { router } from "expo-router";

type RootStackParamList = {
  "register/register2": { email: string };
  // add other routes here if needed
};

export default function Register1() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    if (validateEmail()) {
      navigation.navigate("register/register2", { email });
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotInactive} />
        <View style={styles.progressDotInactive} />
      </View>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
      />

      {/* Continue with Email Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue with Email</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Media Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../assets/images/google_icon.png")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../assets/images/facebook_icon.png")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => router.push("/login/login1")}>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
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
  continueButton: {
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
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#A9A9A9",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#A9A9A9",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#000000",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#000000",
  },
  footerLink: {
    color: "#F28D35",
    fontWeight: "bold",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
});