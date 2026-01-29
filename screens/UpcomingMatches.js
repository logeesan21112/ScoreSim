import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MatchCard from '../components/Matches/MatchCard';
import BottomBar from '../components/BottomBar';
import Config from '../common/config';

const dummyMatches = [
  { id: '1', league: 'Tech Premier League', teams: ['Western Bulls', 'Northern Spartens'], time: 'Today, 3:00 PM' },
  { id: '2', league: 'Tech Premier League', teams: ['Kanthurata Royals', 'Uva Falcons'], time: 'Tomorrow, 5:00 PM' },
];

const UpcomingMatches = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    alert(`${tabName} pressed! (You can navigate or update content here)`);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="CricApp" />
      <FlatList
        data={dummyMatches}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MatchCard match={item} onPress={() => alert(`${item.teams[0]} vs ${item.teams[1]} clicked!`)} />}
        ListHeaderComponent={() => <Text style={styles.sectionTitle}>Upcoming Matches</Text>}
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
        contentContainerStyle={{ paddingBottom: 80 }} // make space for bottom bar
      />
      <BottomBar active={activeTab} onPress={handleTabPress} />
    </View>
  );
};

export default UpcomingMatches;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Config.backgroundColor },
  sectionTitle: { fontWeight: 'bold', marginHorizontal: 20, marginVertical: 10, fontSize: 18 },
});
