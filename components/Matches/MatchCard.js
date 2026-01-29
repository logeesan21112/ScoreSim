import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Config from '../../common/config';

const teamImages = {
  'Western Bulls': require('../../assets/Western Bulls.jpg'),
  'Northern Spartens': require('../../assets/Northern Spartens.jpg'),
  'Kanthurata Royals': require('../../assets/Kanthurata Royals.jpg'),
  'Uva Falcons': require('../../assets/Uva Falcons.jpg'),
};

const MatchCard = ({ match, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={styles.matchContainer}>
      <Image source={teamImages[match.teams[0]]} style={styles.teamImage} />
      <View style={styles.matchInfo}>
        <Text style={styles.leagueName}>{match.league}</Text>
        <Text style={styles.matchName}>{`${match.teams[0]} vs ${match.teams[1]}`}</Text>
        <Text style={styles.time}>{match.time}</Text>
      </View>
      <Image source={teamImages[match.teams[1]]} style={styles.teamImage} />
    </View>
  </TouchableOpacity>
);

export default MatchCard;

const styles = StyleSheet.create({
  matchContainer: {
    marginHorizontal: 20,
    marginVertical: 8,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchInfo: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamImage: { width: 80, height: 80 },
  leagueName: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  matchName: { fontSize: 16, textAlign: 'center', marginBottom: 5 },
  time: { fontWeight: 'bold', color: Config.highlightColor, textAlign: 'center' },
});
