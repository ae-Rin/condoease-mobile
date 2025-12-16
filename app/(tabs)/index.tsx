import { IconSymbol } from "@/components/ui/IconSymbol";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string | null>(null);
  // const API_URl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const json = await AsyncStorage.getItem('user');
        if (json) {
          const u = JSON.parse(json);
          // try common name fields
          const name = u?.firstName || u?.name || u?.fullName || null;
          if (name) {
            // if we have both firstName and lastName, prefer that
            if (u?.firstName && u?.lastName) {
              setUserName(`${u.firstName} ${u.lastName}`);
            } else {
              setUserName(name);
            }
            return;
          }
        }
      } catch (e) {
        // ignore parse errors but log for debugging
        console.warn('Failed to parse user from storage', e);
      }
      setUserName(null);
    };

    loadUser();
  }, []);



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("../settings/settings")} style={styles.menuButton}>
          <IconSymbol name="menucard.fill" size={24} color="#000000" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />


      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
  {/* Welcome Section */}
  <Text style={styles.welcomeText}>Welcome, {userName ?? 'Guest'}!</Text>

        {/* Announcements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Announcement Header !!</Text>
            <Text style={styles.cardDescription}>
              Announcement description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Text>
          </View>
        </View>

        {/* Payment and Billing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment and Billing</Text>
          <TouchableOpacity onPress={() => router.push("/payments")}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Balance</Text>
              <Text style={styles.cardSubtitle}>as of MM/DD/YYYY</Text>
              <Text style={styles.cardValue}>-123,456.78</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/payments")}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Dues</Text>
              <Text style={styles.cardSubtitle}>as of MM/DD/YYYY</Text>
              <Text style={styles.cardValue}>6,543.21</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Maintenance Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Maintenance Information</Text>
          <TouchableOpacity onPress={() => router.push("/maintenance")}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Request Maintenance</Text>
              <Text style={styles.cardDescription}>Submit a maintenance request form</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/maintenance")}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Maintenance Status</Text>
              <Text style={styles.cardDescription}>No ongoing maintenance request</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Unit Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unit Information</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tenant Details</Text>
            <Text style={styles.cardDescription}>ID, Documents</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lease & Unit Details</Text>
            <Text style={styles.cardDescription}>
              Lease Type, Start & End Date, Amenities
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
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
  menuButton: {
    padding: 5,
  },
  logo: {
    width: 200,
    height: 50,
    marginVertical:20,
  },
  profileButton: {
    padding: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#333333",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  cardDescription: {
    fontSize: 12,
    color: "#333333",
  },
});
