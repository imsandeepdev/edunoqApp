import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 45,
    backgroundColor: '#f5f5f5',
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  // Connected Section Headers
  sectionHeaderRow: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    alignSelf: 'center',
  },
  sectionHeaderItem: {
    flex: 1,
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(214, 216, 218, 1)', // same color
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  selectedHeader: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700', // gold underline for active section
  },
  unselectedHeader: {
    borderBottomWidth: 3,
    borderBottomColor: 'transparent', // no underline
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: 'rgba(25, 118, 210, 1)',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
