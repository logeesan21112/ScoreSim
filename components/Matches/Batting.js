import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Config from '../../common/config';


const { width } = Dimensions.get('window');

const Batting = ({ batting, battingTeam }) => (
  <View style={styles.battingContainer}>
    <View style={styles.tableHeading}>
      <View style={styles.playerInfo}><Text style={styles.headingText}>Batsman</Text></View>
      <View style={styles.scoreInfo}>
        <Text style={styles.headingScore}>R</Text>
        <Text style={styles.headingScore}>B</Text>
        <Text style={styles.headingScore}>4s</Text>
        <Text style={styles.headingScore}>6s</Text>
        <Text style={styles.headingScore}>SR</Text>
      </View>
    </View>

    {batting.map(player => (
      player.scoreboard === battingTeam && (
        <View key={player.id} style={styles.tableRow}>
          <View style={styles.playerScore}>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>
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
    ))}
  </View>
);

const styles = StyleSheet.create({
  battingContainer: { flexDirection: 'column' },
  tableHeading: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: Config.primaryColor, paddingHorizontal: 20, paddingVertical: 8 },
  tableRow: { borderBottomWidth: 1, borderBottomColor: '#eaeaea', paddingHorizontal: 20, paddingVertical: 8 },
  playerScore: { flexDirection: 'row', justifyContent: 'space-between' },
  playerInfo: { flex: 0, flexWrap: 'wrap', width: width / 2 },
  scoreInfo: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  score: { minWidth: 30, maxWidth: 30, textAlign: 'right' },
  headingText: { color: '#fff' },
  headingScore: { minWidth: 30, maxWidth: 30, textAlign: 'right', color: '#fff' },
  playerName: { color: Config.primaryColor },
});

export default Batting;
