import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import styles from './styles';
import AppTextInput from '../../Components/AppTextInput';
import R from '../../Res/R';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProfileScreen = ({ navigation }: any) => {

  // Profile Info
  const [studentName, setStudentName] = useState("name");
  const [studentMobile, setStudentMobile] = useState("mobile");
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Family Info
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [guardianContact, setGuardianContact] = useState('');

  // Emergency Contact
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');

  // Expanded Section
  const [expandedSection, setExpandedSection] = useState<'profile' | 'family' | 'emergency' | null>(null);

  // Pick Image
  const pickImage = () => {
    const options: ImageLibraryOptions = { mediaType: 'photo', quality: 1 as const };
    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Save Profile
  const handleSaveProfile = () => {
    if (
      !studentName || !studentMobile || !age || !className || !imageUri ||
      !fatherName || !motherName || !guardianContact ||
      !emergencyName || !emergencyNumber
    ) {
      Alert.alert('❌ Error', 'Please fill all fields and upload an image');
      return;
    }

    Alert.alert(
      '✅ Success',
      `Profile saved for ${studentName}\nMobile: ${studentMobile}\nAge: ${age}\nClass: ${className}\nFather: ${fatherName}\nMother: ${motherName}\nGuardian: ${guardianContact}\nEmergency: ${emergencyName} (${emergencyNumber})`
    );

    navigation.navigate('Home');

  };

  const toggleSection = (section: 'profile' | 'family' | 'emergency') => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
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

      {/* Section Headers */}
      <View style={styles.sectionHeaderRow}>
        <TouchableOpacity
          style={[
            styles.sectionHeaderItem,
            expandedSection === 'profile' ? styles.selectedHeader : styles.unselectedHeader
          ]}
          onPress={() => toggleSection('profile')}
        >
          <Text style={styles.sectionHeaderText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionHeaderItem,
            expandedSection === 'family' ? styles.selectedHeader : styles.unselectedHeader
          ]}
          onPress={() => toggleSection('family')}
        >
          <Text style={styles.sectionHeaderText}>Family</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionHeaderItem,
            expandedSection === 'emergency' ? styles.selectedHeader : styles.unselectedHeader
          ]}
          onPress={() => toggleSection('emergency')}
        >
          <Text style={styles.sectionHeaderText}>Emergency</Text>
        </TouchableOpacity>
      </View>

      {/* Expanded Sections */}
      {expandedSection === 'profile' && (
        <View style={styles.card}>
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Student Name"
            value={studentName}
            onChangeText={setStudentName}
            title="Student Name"
          />
          <AppTextInput
            icon={R.image.mobileIcon}
            placeholder="Mobile Number"
            value={studentMobile}
            onChangeText={setStudentMobile}
            keyboardType="phone-pad"
            maxLength={10}
            title="Mobile Number"
          />
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            maxLength={2}
            title="Age"
          />
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Class"
            value={className}
            onChangeText={setClassName}
            title="Class"
          />
        </View>
      )}

      {expandedSection === 'family' && (
        <View style={styles.card}>
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Father's Name"
            value={fatherName}
            onChangeText={setFatherName}
            title="Father's Name"
          />
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Mother's Name"
            value={motherName}
            onChangeText={setMotherName}
            title="Mother's Name"
          />
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Guardian Contact"
            value={guardianContact}
            onChangeText={setGuardianContact}
            keyboardType="phone-pad"
            maxLength={10}
            title="Guardian Contact"
          />
        </View>
      )}

      {expandedSection === 'emergency' && (
        <View style={styles.card}>
          <AppTextInput
            icon={R.image.nameIcon}
            placeholder="Emergency Contact Name"
            value={emergencyName}
            onChangeText={setEmergencyName}
            title="Emergency Contact Name"
          />
          <AppTextInput
            icon={R.image.mobileIcon}
            placeholder="Emergency Contact Number"
            value={emergencyNumber}
            onChangeText={setEmergencyNumber}
            keyboardType="phone-pad"
            maxLength={10}
            title="Emergency Contact Number"
          />
        </View>
      )}

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
