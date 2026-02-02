import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from '../../common/config';

const Bowling = ({ bowling, bowlingTeam }) => (
  <View style={styles.bowlingContainer}>
    <View style={styles.tableHeading}>
      <View style={styles.playerInfo}>
        <Text style={styles.headingText}>Bowler</Text>
      </View>
      <View style={styles.scoreInfo}>
        <Text style={styles.headingScore}>O</Text>
        <Text style={styles.headingScore}>M</Text>
        <Text style={styles.headingScore}>R</Text>
        <Text style={styles.headingScore}>W</Text>
        <Text style={styles.headingScore}>ER</Text>
      </View>
    </View>

    {bowling.map(player => {
      if (player.scoreboard !== bowlingTeam) return null;

      return (
        <View key={player.id} style={styles.tableRow}>
          <View style={styles.row}>
            <View style={styles.playerInfo}>
              <Text
                style={styles.playerName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {player.bowler.fullname}{player.active ? ' *' : ''}
              </Text>
            </View>
            <View style={styles.scoreInfo}>
              <Text style={styles.score}>{player.overs}</Text>
              <Text style={styles.score}>{player.medians}</Text>
              <Text style={styles.score}>{player.runs}</Text>
              <Text style={styles.score}>{player.wickets}</Text>
              <Text style={styles.score}>{player.rate.toFixed(1)}</Text>
            </View>
          </View>
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  bowlingContainer: {
    flexDirection: 'column',
  },
  tableHeading: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Config.primaryColor,
  },
  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerInfo: {
    flex: 2,
    paddingRight: 5,
  },
  scoreInfo: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: '#fff',
    fontWeight: '600',
  },
  headingScore: {
    color: '#fff',
    fontWeight: '600',
  },
  playerName: {
    color: Config.primaryColor,
  },
  score: {
    minWidth: 30,
    textAlign: 'right',
  },
});

export default Bowling;