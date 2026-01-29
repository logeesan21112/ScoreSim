import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Config from '../../common/config';


const { width } = Dimensions.get('window');

const Bowling = ({ bowling, bowlingTeam }) => (
  <View style={styles.bowlingContainer}>
    <View style={styles.tableHeading}>
      <View style={styles.playerInfo}><Text style={styles.headingText}>Bowler</Text></View>
      <View style={styles.scoreInfo}>
        <Text style={styles.headingScore}>O</Text>
        <Text style={styles.headingScore}>M</Text>
        <Text style={styles.headingScore}>R</Text>
        <Text style={styles.headingScore}>W</Text>
        <Text style={styles.headingScore}>ER</Text>
      </View>
    </View>

    {bowling.map(player => (
      player.scoreboard === bowlingTeam && (
        <View key={player.id} style={styles.tableRow}>
          <View style={styles.playerScore}>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.bowler.fullname}{player.active ? ' *' : ''}</Text>
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
      )
    ))}
  </View>
);

const styles = StyleSheet.create({
  bowlingContainer: { flexDirection: 'column' },
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

export default Bowling;
