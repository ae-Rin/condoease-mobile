import { IconSymbol } from "@/components/ui/IconSymbol";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string | null>(null);
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadAnnouncements = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      // const json = await AsyncStorage.getItem("user");
      // const u = json ? JSON.parse(json) : null;
      // const token = u?.token;
      const res = await axios.get(`${API_URL}/api/announcements`, {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined,
      });
      setAnnouncements(res.data);
    } catch (err) {
      console.error("Failed to load announcements", err);
    } finally {
      setLoading(false);
    }
  };
  if (API_URL) loadAnnouncements();
}, [API_URL]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const json = await AsyncStorage.getItem('user');
        if (json) {
          const u = JSON.parse(json);
          const name = u?.firstName || u?.name || u?.fullName || null;
          if (name) {
            if (u?.firstName && u?.lastName) {
              setUserName(`${u.firstName} ${u.lastName}`);
            } else {
              setUserName(name);
            }
            return;
          }
        }
      } catch (e) {
        console.warn('Failed to parse user from storage', e);
      }
      setUserName(null);
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (!API_URL) return

    const wsProtocol = API_URL.startsWith('https') ? 'wss' : 'ws'
    const wsUrl = `${wsProtocol}://${API_URL.replace(/^https?:\/\//, '')}/ws/announcements`
    const ws = new WebSocket(wsUrl)

    ws.onopen = () => {
      console.log('Announcements WebSocket connected')
    }
    ws.onmessage = (msg) => {
      try {
        const { event, data } = JSON.parse(msg.data)

        if (event === 'new_announcement') {
          setAnnouncements((prev) => {
            const exists = prev.some((a) => a.id === data.id)
            return exists ? prev : [data, ...prev]
          })
        }
        if (event === 'archive_announcement') {
          setAnnouncements((prev) => prev.filter((a) => a.id !== data.id))
        }
      } catch (e) {
        console.error('Invalid WS message', e)
      }
    }

    ws.onerror = (err) => {
      console.error('WebSocket error', err)
    }
    ws.onclose = () => {
      console.log('Announcements WebSocket closed')
    }
    return () => {
      ws.close()
    }
  }, [API_URL])



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
        <Text style={styles.welcomeText}>Welcome, {userName ?? 'Guest'}!</Text>

        {/* Announcements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          {loading && <Text>Loading announcements...</Text>}
          {announcements.map((a) => (
            <View key={a.id} style={styles.card}>
              <Text style={styles.cardTitle}>{a.title}</Text>
              <Text style={styles.cardDescription}>{a.description}</Text>
              {a.file_url && (
                <Image
                  source={{ uri: a.file_url }}
                  style={{ width: "100%", height: 180, marginTop: 10, borderRadius: 6 }}
                  resizeMode="cover"
                />
              )}
            </View>
          ))}
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
    marginVertical: 20,
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
