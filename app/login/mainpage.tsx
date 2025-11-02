
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MainPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/main_logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/login/login1")} // Navigate to login1.tsx
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/register/register1")}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, // Adjust width if needed
    height: 200, // Adjust height if needed
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupText: {
    fontSize: 14,
    color: "#000000",
  },
  signupLink: {
    fontSize: 14,
    color: "#F28D35",
    fontWeight: "bold",
  },
});
