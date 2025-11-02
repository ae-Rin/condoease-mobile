import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login2() {
  const router = useRouter();
  const { email: passedEmail } = useLocalSearchParams();
  const [email, setEmail] = useState(
    typeof passedEmail === "string" ? passedEmail : ""
  ); // Set initial value
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Login failed.");
      }

      const { token, user } = await response.json();

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      router.replace("/(tabs)");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Login Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail} // Allow editing
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={
              passwordVisible
                ? require("../../assets/images/close_eye.png")
                : require("../../assets/images/open_eye.png")
            }
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {error ? (
        <Text style={{ color: "red", marginBottom: 10, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <TouchableOpacity onPress={() => router.push("/register/register1")}>
            <Text style={styles.footerLink}>Sign Up</Text>
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
  logo: {
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 20,
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 16,
    color: "#A9A9A9",
    marginLeft: 10,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#F28D35",
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
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
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
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
});
