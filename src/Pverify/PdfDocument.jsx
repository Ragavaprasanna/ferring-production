import React from "react";
import { Document, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";

const PdfDocument = ({ rowData }) => (
  <Document>
    <Page size="A4">
      <View style={styles.page}>

      <Text style={styles.title}>SHIELD</Text>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Drug Name:</Text>
          <Text style={styles.cellValue}>{rowData.drug_name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Insurance Name:</Text>
          <Text style={styles.cellValue}>{rowData.insurance_name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Plan Name:</Text>
          <Text style={styles.cellValue}>{rowData.Plan_name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>First Name:</Text>
          <Text style={styles.cellValue}>{rowData.first_name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Last Name:</Text>
          <Text style={styles.cellValue}>{rowData.last_name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Case Id:</Text>
          <Text style={styles.cellValue}>{rowData.userid}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Subscriber Id:</Text>
          <Text style={styles.cellValue}>{rowData.subscriber_id}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellHeader}>Coverage:</Text>
          <Text style={styles.cellValue}>{rowData.coverage_status}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

PdfDocument.generatePdfBlob = async (rowData) => {
  try {
    const pdfBlob = await pdf(<PdfDocument rowData={rowData} />).toBlob();
    return pdfBlob;
  } catch (error) {
    console.error('Error generating PDF blob:', error);
    throw error;
  }
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    justifyContent:"center",
    textAlign:"center",
    marginBottom:"9%",
    color:"#296abd"
    
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent:"center",
    textAlign:"center",
  },
  cellHeader: {
    width: "40%",
    justifyContent:"center",
    textAlign:"center",
    marginRight: 10,
    fontWeight: "bold",
  },
  cellValue: {
    width: "60%",
  },
});

export default PdfDocument;
