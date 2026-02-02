import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import MatchCard from '../../components/Matches/MatchCard';
import Config from '../../common/config';

const dummyMatches = [
  {
    id: '1',
    league: 'ICC International Series',
    teams: ['Sri Lanka', 'Australia'],
    time: 'Today, 3:00 PM',
  },
  {
    id: '2',
    league: 'ICC International Series',
    teams: ['India', 'Pakistan'],
    time: 'Tomorrow, 7:30 PM',
  },
  {
    id: '3',
    league: 'ICC International Series',
    teams: ['England', 'New Zealand'],
    time: 'Feb 5, 6:00 PM',
  },
  {
    id: '4',
    league: 'ICC International Series',
    teams: ['South Africa', 'West Indies'],
    time: 'Feb 6, 4:00 PM',
  },
  {
    id: '5',
    league: 'ICC International Series',
    teams: ['Sri Lanka', 'India'],
    time: 'Feb 7, 7:00 PM',
  },
  {
  id: '6',
  league: 'ICC International Series',
  teams: ['Australia', 'England'],
  time: 'Feb 8, 5:00 PM',
  },
  {
    id: '7',
    league: 'ICC International Series',
    teams: ['Pakistan', 'Sri Lanka'],
    time: 'Feb 9, 7:30 PM',
  },
  {
    id: '8',
    league: 'ICC International Series',
    teams: ['New Zealand', 'South Africa'],
    time: 'Feb 10, 4:00 PM',
  },
  {
    id: '9',
    league: 'ICC International Series',
    teams: ['West Indies', 'India'],
    time: 'Feb 11, 6:30 PM',
  },
  {
    id: '10',
    league: 'ICC International Series',
    teams: ['England', 'Sri Lanka'],
    time: 'Feb 12, 7:00 PM',
  },
];

const UpcomingMatches = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title="CricApp" />

      <FlatList
        data={dummyMatches}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('LiveScore', { match: item })}
          >
            <MatchCard match={item} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.sectionTitle}>Upcoming Matches</Text>
        )}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

export default UpcomingMatches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.backgroundColor,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 18,
  },
});