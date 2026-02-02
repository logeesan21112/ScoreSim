import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Config from '../../common/config';

const { width } = Dimensions.get('window');

const Batting = ({ batting, battingTeam }) => (
  <View style={styles.battingContainer}>
    <View style={styles.tableHeading}>
      <View style={styles.playerInfo}>
        <Text style={styles.headingText}>Batsman</Text>
      </View>
      <View style={styles.scoreInfo}>
        <Text style={styles.headingScore}>R</Text>
        <Text style={styles.headingScore}>B</Text>
        <Text style={styles.headingScore}>4s</Text>
        <Text style={styles.headingScore}>6s</Text>
        <Text style={styles.headingScore}>SR</Text>
      </View>
    </View>

    {batting.map(player =>
      player.scoreboard === battingTeam && (
        <View key={player.id} style={styles.tableRow}>
          <View style={styles.row}>
            <View style={styles.playerInfo}>
              <Text
                style={styles.playerName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {player.batsman.fullname}{player.active ? ' *' : ''}
              </Text>
            </View>
            <View style={styles.scoreInfo}>
              <Text style={styles.score}>{player.score}</Text>
              <Text style={styles.score}>{player.ball}</Text>
              <Text style={styles.score}>{player.four_x}</Text>
              <Text style={styles.score}>{player.six_x}</Text>
              <Text style={styles.score}>{player.rate}</Text>
            </View>
          </View>
        </View>
      )
    )}
  </View>
);

const styles = StyleSheet.create({
  battingContainer: { flexDirection: 'column' },

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

  row: { flexDirection: 'row', alignItems: 'center' },

  playerInfo: { flex: 2, paddingRight: 5 },
  scoreInfo: { flex: 3, flexDirection: 'row', justifyContent: 'space-between' },

  headingText: { color: '#fff', fontWeight: '600' },
  headingScore: { color: '#fff', fontWeight: '600' },
  playerName: { color: Config.primaryColor },

  score: { minWidth: 30, textAlign: 'right' },
});

export default Batting;