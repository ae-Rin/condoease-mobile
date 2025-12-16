// u can remove unused code snippets, i just left them for context
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Leases() {
  const [attachment, setAttachment] = useState<{ uri: string; type?: string } | null>(null); // file object
  const router = useRouter();

    const handleBack = () => {
      if (router.canGoBack()) {
        router.push("/(tabs)");
      } else {
        router.back();
      }
    };
  

  return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.menuButton}>
              <IconSymbol name="chevron.left" size={40} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tenant Details</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/name");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Name</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Enter Name</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/email");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Email</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Enter Email</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/birthday");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Date of Birth</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Date</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/contact");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Contact Details</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Number</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/tenantid");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Tenant ID</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>N/A / Drivers License / Pending</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/settings/details/emergencycontact");
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Emergency Contact</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Name, Number</Text>
                <IconSymbol
                  color="#bcbcbc"
                  name="chevron.right"
                  size={19} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Unit */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lease & Unit Details</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <View
                style={styles.row}>
                <Text style={styles.rowLabel}>Unit</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>1234</Text>
              </View>
            </View>
            <View style={styles.rowWrapper}>
              <View
                style={styles.row}>
                <Text style={styles.rowLabel}>Unit Type</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>3BR, 2BA</Text>
              </View>
            </View>
            <View style={styles.rowWrapper}>
              <View
                style={styles.row}>
                <Text style={styles.rowLabel}>Lease Start Date</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>MM/DD/YYYY</Text>
              </View>
            </View>
            <View style={styles.rowWrapper}>
              <View
                style={styles.row}>
                <Text style={styles.rowLabel}>Lease End Date</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>MM/DD/YYYY</Text>
              </View>
            </View>
            <View style={[styles.rowWrapper, styles.rowLast]}>
              <View
                style={styles.row}>
                <Text style={styles.rowLabel}>Payment Method</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>PDC / etc.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Settings</Text>
            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Oops!", "The user manual is not available at this time.");
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>User Manual</Text>
                  <View style={styles.rowSpacer} />
                  <IconSymbol
                    color="#bcbcbc"
                    name="chevron.right"
                    size={19} />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowWrapper, styles.rowLast]}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={()=>{router.push("/settings/appsett/delete")}}>
                  <Text style={styles.rowLabel}>Delete Account</Text>
                  <View style={styles.rowSpacer} />
                  <IconSymbol
                    color="#bcbcbc"
                    name="chevron.right"
                    size={19} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        <Text style={styles.changes}>Contact your Property Manager for changes in Lease & Unit Details.</Text>
            </ScrollView>
  
        </View>
          );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f5f5f5",
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
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  changes: {
    margin: 8,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    lineHeight: 18,
    fontWeight: '500',
    color: '#5a5a5aff',
    textTransform: 'uppercase',
  },
});