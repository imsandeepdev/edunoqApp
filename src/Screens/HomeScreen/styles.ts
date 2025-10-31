import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FD',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#DDD',
  },

  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#EEE',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4C8EF7',
  },
  progressPercent: {
    fontSize: 14,
    color: '#4C8EF7',
    marginTop: 8,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 12,
    color: '#222',
  },

  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  aiCard: {
    backgroundColor: '#EAF3FF',
    borderRadius: 14,
    padding: 16,
    marginVertical: 12,
  },
  aiText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    fontStyle: 'italic',
  },

  badge: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  badgeText: {
    fontSize: 14,
    color: '#333',
  },

  premiumCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  premiumSubtitle: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 10,
  },
});

export default styles;
