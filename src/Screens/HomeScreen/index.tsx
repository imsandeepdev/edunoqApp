import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import R from '../../Res/R';
import { AppButton } from '../../Components';
import styles from './styles'; // ✅ imported stylesheet

const HomeScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const { name, mobile } = route.params || {};

  const [userName, setUserName] = useState(name || 'Student');
  const [progress, setProgress] = useState(72);

  useEffect(() => {
    if (route.params?.name) setUserName(route.params.name);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Greeting Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome Back,</Text>
            <Text style={styles.userName}>{userName} 👋</Text>
          </View>
          <Image
            source={R.image.profileIcon || require('../../Res/images/profile.png')}
            style={styles.profileIcon}
          />
        </View>

        {/* Progress Overview */}
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Your Learning Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressPercent}>{progress}% Completed</Text>
        </View>

        {/* Quick Access Section */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickGrid}>
          {[
            { title: 'AI Tutor', icon: R.image.aiIcon },
            { title: 'Question Bank', icon: R.image.bookIcon },
            { title: 'Reports', icon: R.image.reportIcon },
            { title: 'Study Plan', icon: R.image.plansIcon },
            { title: 'Achievements', icon: R.image.badgeIcon },
            { title: 'Upload Docs', icon: R.image.uploadIcon },
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.featureCard}
              onPress={() => console.log(`${item.title} Clicked`)}
            >
              <Image
                source={item.icon || require('../../Res/images/profile.png')}
                style={styles.featureIcon}
              />
              <Text style={styles.featureText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* AI Insights */}
        <Text style={styles.sectionTitle}>AI Insights</Text>
        <View style={styles.aiCard}>
          <Text style={styles.aiText}>
            🧠 “You performed 20% better in *Maths* this week! Focus on Geometry for further improvement.”
          </Text>
          <AppButton
            title="View Details"
            onPress={() => console.log('AI Insights Clicked')}
            paddingVertical={10}
            marginHorizontal={20}
          />
        </View>

        {/* Gamification */}
        <Text style={styles.sectionTitle}>Your Badges</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {['Top Scorer 🏅', 'Quiz Master 🧠', 'Consistent Learner 💪'].map((badge, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Premium Upgrade */}
        <View style={styles.premiumCard}>
          <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
          <Text style={styles.premiumSubtitle}>
            Unlock AI-driven document Q&A, unlimited quizzes & detailed analytics.
          </Text>
          <AppButton
            title="Upgrade Now"
            onPress={() => console.log('Upgrade Clicked')}
            paddingVertical={12}
            marginHorizontal={30}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
