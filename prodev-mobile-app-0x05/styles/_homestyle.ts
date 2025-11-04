import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchGroup: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchFormText: {
    fontSize: 16,
    color: '#333333',
  },
  searchControl: {
    marginLeft: 8,
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  searchButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    padding: 12,
  },
  filterContainer: {
    width: 72,
    height: 72,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  listingContainer: {
    paddingHorizontal: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
export { styles };
