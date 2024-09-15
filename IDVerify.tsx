import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';  // Adjust this path based on your project structure

const IDVerify = () => {
  const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Function to handle document selection
  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setFileResponse(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.warn('File selection was canceled');
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Instruction Text */}
      <Text style={styles.title}>Please upload a photo of your Driving License</Text>

      {/* Upload Box */}
      <View style={styles.uploadBox}>
        <Text style={styles.uploadText}>Drag your file(s) to start uploading</Text>
        <Text style={styles.orText}>OR</Text>

        {/* Browse Files Button */}
        <Button
          mode="outlined"
          onPress={handleDocumentSelection}
          style={styles.browseButton}
        >
          Browse files
        </Button>

        {/* Display Selected File */}
        {fileResponse.length > 0 && (
          <View style={styles.fileList}>
            <Text style={styles.fileName}>Selected File: {fileResponse[0].name}</Text>
          </View>
        )}

        <Text style={styles.supportText}>
          Only support .jpg, .png and .svg and zip files
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        {/* Cancel Button Navigates to Home */}
        <Button mode="outlined" style={styles.cancelButton} onPress={() => navigation.navigate('Home')}>
          Cancel
        </Button>
        
        {/* Next Button Navigates to Photomodel */}
        <Button mode="contained" style={styles.nextButton} onPress={() => navigation.navigate('Photomodel')}>
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  uploadBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 30,
  },
  uploadText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  orText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  browseButton: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  supportText: {
    fontSize: 12,
    marginTop: 20,
    color: '#666',
  },
  fileList: {
    marginTop: 10,
  },
  fileName: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    borderColor: '#333',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#33372C',
  },
});

export default IDVerify;
