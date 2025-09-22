import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Asset,
} from 'react-native-image-picker';
import styles from './styles';

const ProfileScreen = ({ route, navigation }: any) => {
  const { name, mobile } = route.params;
  const [studentName, setStudentName] = useState(name || '');
  const [studentMobile, setStudentMobile] = useState(mobile || '');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  // 📌 Pick Image
  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1 as const, // 👈 must be 0 | 0.5 | 1
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset: Asset = response.assets[0];
        if (asset.uri) {
          setImageUri(asset.uri); // ✅ safe assignment
        }
      }
    });
  };

  // 📌 Save Profile
  const handleSaveProfile = () => {
    if (!studentName || !studentMobile || !age || !className || !imageUri) {
      Alert.alert('❌ Error', 'Please fill all fields and upload an image');
      return;
    }

    Alert.alert(
      '✅ Success',
      `Profile saved for ${studentName}\nMobile: ${studentMobile}\nAge: ${age}\nClass: ${className}`
    );

    navigation.navigate('Home'); // adjust to your navigation flow
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: '#888' }}>Upload Image</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Student Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />

      {/* Mobile */}
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={studentMobile}
        onChangeText={setStudentMobile}
        keyboardType="phone-pad"
        maxLength={10}
      />

      {/* Age */}
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        maxLength={2}
      />

      {/* Class */}
      <TextInput
        style={styles.input}
        placeholder="Enter Class (e.g. 10th, 12th)"
        value={className}
        onChangeText={setClassName}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
