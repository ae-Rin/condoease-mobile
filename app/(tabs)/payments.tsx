import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"balance" | "dues">("balance");
  const { width } = useWindowDimensions();
  const router = useRouter();

  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
      </View>
      
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
            <View style={[styles.swcontainer, {width: width}]}>
      {/* Toggle buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "balance" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("balance")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "balance" && styles.activeText,
            ]}
          >
            Balance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "dues" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("dues")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "dues" && styles.activeText,
            ]}
          >
            Dues
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      <View style={styles.content}>
        {activeTab === "balance" ? (
          <View style={styles.section}>
            <View style={styles.cardbill}>
            <Text style={styles.billTitle}>Balance as of MM/DD/YYYY</Text>
              <Text style={styles.cardValue}>-123,456.78</Text>
          </View>
                    {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
        {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
        {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
          </View>
        ) : (
                    <View style={styles.section}>
            <View style={styles.cardbill}>
            <Text style={styles.billTitle}>Dues as of MM/DD/YYYY</Text>
              <Text style={styles.cardValue}>-123,456.78</Text>
          </View>
                    {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
        {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
        {/* DATE */}
        <View style={styles.daycard}>
          <View style={styles.datecard}>
            <Text style={styles.dateText}>SEPT. 21, 2025</Text>
          </View>
          {/* TRANSACTION */}
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
          <View style={styles.transcard}>
            <View style={styles.timeReceipt}>
              <Text style={styles.cardTime}>HH:MM TT</Text>
              <Text style={styles.cardReceipt}>Receipt</Text>
            </View>
            <Text style={styles.cardReceipt}>123.45</Text>
          </View>
        </View>
          </View>
        )}
      </View>
    </View>
        {/* <TouchableOpacity style={styles.payButton} onPress={() => 
          router.push({
            pathname: '/bills/settle',
            params: { invoiceId: 'CE-001', amount: 1234.56, description: 'Monthly Dues' },
          },
          )}>
                <Text style={styles.payButtonText}>Settle Payment</Text>
        </TouchableOpacity> */}
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
    padding: 10,
  },
  logo: {
    width: 200,
    height: 50,
  },
  profileButton: {
    padding: 10,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    alignContent: "center",
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
  cardTime: {
    fontSize: 14,
    color: "#333333",
  },
  cardReceipt: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  swcontainer: {
    flex: 1,
    backgroundColor: "#fff",

  },
  toggleContainer: {
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#f57c00", // orange active color
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activeText: {
    color: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardbill:{
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    marginVertical: 20,
    alignSelf: "center",
  },
  datecard: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    padding: 20,
    justifyContent: "center",
  },
  daycard: {
    justifyContent: "center",
  },
  transcard: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    paddingVertical: 10,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timecard: {
    fontSize: 12,
    color: "#333333",
  },
  timeReceipt: {
    flexDirection: "column",
  },
  billTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  payButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  payButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    margin:20
  },
});
