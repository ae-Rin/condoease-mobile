// u can remove unused code snippets, i just left them for context
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Leases() {
  const [attachment, setAttachment] = useState<{ uri: string; type?: string } | null>(null); // file object
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Leases</Text>
      </View>
      <Text style={styles.subtitle}>Your lease will only be visible to you and the administrator.</Text>
      <Text style={styles.title}>Leases & Agreements</Text>
      <View style={styles.filePreview}>
        {/* {attachment ? (
          <Image source={{IconSymbol.getItem }} style={{ width: 200, height: 200 }} />
          ) : (
          <Text style={styles.filePreviewText}>No attached files</Text>
          )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    margin: 20,
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
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    margin:20
  },
  filePreview: {
    borderWidth: 1,
    borderColor: "#8FAF8B",
    borderRadius: 8,
    padding: 16,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  filePreviewText: {
    color: "#666",
  },
});
