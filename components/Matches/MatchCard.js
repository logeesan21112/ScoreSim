import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Config from '../../common/config';

const teamImages = {
  'Sri Lanka': require('../../assets/flags/srilanka.png'),
  'Australia' : require('../../assets/flags/australia.png'),
  'India' : require('../../assets/flags/india.png'),
  'Pakistan' : require('../../assets/flags/pakistan.png'),
  'England' : require('../../assets/flags/england.png'),
  'New Zealand': require('../../assets/flags/newzealand.png'),
  'South Africa': require('../../assets/flags/southafrica.png'),
  'West Indies': require('../../assets/flags/westindies.png'),
};

const MatchCard = ({ match, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={styles.matchContainer}>
      <Image
        source={teamImages[match.teams[0]]}
        style={styles.teamImage}
      />

      <View style={styles.matchInfo}>
        <Text style={styles.leagueName}>{match.league}</Text>
        <Text style={styles.matchName}>
          {`${match.teams[0]} vs ${match.teams[1]}`}
        </Text>
        <Text style={styles.time}>{match.time}</Text>
      </View>

      <Image
        source={teamImages[match.teams[1]]}
        style={styles.teamImage}
      />
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
  teamImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  leagueName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  matchName: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  time: {
    fontWeight: 'bold',
    color: Config.highlightColor,
    textAlign: 'center',
  },
});