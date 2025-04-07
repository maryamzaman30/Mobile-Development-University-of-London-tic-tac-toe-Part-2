// Import React from the react package
import React from 'react';

// Import the StatusBar component from expo-status-bar package
import { StatusBar } from 'expo-status-bar';

// Import components from react-native for building the UI
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Define the default export function 'App'
export default function App() 
{
  return (
    // Main container view with styles applied
    <View style={styles.container}>
      {/* SafeAreaView ensures the content is within the safe area boundaries of a device */}
      <SafeAreaView>
        {/* Grid container view with styles applied */}
        <View style={styles.grid}>
          {/* Row 1 */}
          <View style={styles.row}>
            {/* Cell 1 in Row 1 with 'O' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markO]}>O</Text></View>
            {/* Cell 2 in Row 1 with 'O' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markO]}>O</Text></View>
            {/* Cell 3 in Row 1 with 'X' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markX]}>X</Text></View>
          </View>
          {/* Row 2 */}
          <View style={styles.row}>
            {/* Cell 1 in Row 2 with 'X' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markX]}>X</Text></View>
            {/* Cell 2 in Row 2 with 'O' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markO]}>O</Text></View>
            {/* Cell 3 in Row 2 with 'O' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markO]}>O</Text></View>
          </View>
          {/* Row 3 */}
          <View style={styles.row}>
            {/* Cell 1 in Row 3 with 'X' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markX]}>X</Text></View>
            {/* Cell 2 in Row 3 with 'X' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markX]}>X</Text></View>
            {/* Cell 3 in Row 3 with 'O' mark */}
            <View style={styles.cell}><Text style={[styles.mark, styles.markO]}>O</Text></View>
          </View>
        </View>
        {/* StatusBar component to control the app's status bar appearance */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1, // Take up the full height of the screen
    backgroundColor: '#fff', // Set background color to white
    justifyContent: 'center', // Centers the grid vertically
    alignItems: 'center', // Centers the grid horizontally
  },
  grid: 
  {
    width: '90%', // Responsive width, 90% of the screen width
    aspectRatio: 1, // Ensures the grid is square
  },
  row: 
  {
    flex: 1, // Each row takes up equal space within the grid
    flexDirection: 'row', // Each row contains 3 cells side by side
  },
  cell: 
  {
    flex: 1, // Each cell takes up equal space within a row
    borderWidth: 2, // Border for visual clarity
    borderColor: '#000', // Black border color
    justifyContent: 'center', // Centers the X or O within the cell vertically
    alignItems: 'center', // Centers the X or O within the cell horizontally
    margin: 5, // Margin between cells
  },
  mark: 
  {
    fontSize: 50, // Large font size for X and O
    fontWeight: 'bold', // Bold styling for X and O
  },
  markX:
  {
    color: 'red', // Red color for X
  },
  markO:
  {
    color: 'green', // Green color for O
  }
});