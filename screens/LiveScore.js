import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScoreBoard from '../components/Matches/ScoreBoard';
import Batting from '../components/Matches/Batting';
import Bowling from '../components/Matches/Bowling';
import Accordion from '../components/Matches/Accordion';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Config from '../common/config';

const dummyData = {
  score: {
    note: 'Match in progress',
    status: 'Live',
    localteam: { id: 1, name: 'Western Bulls' },
    visitorteam: { id: 2, name: 'Northern Spartens' },
    scoreboards: [
      { scoreboard: 1, team_id: 1, type: 'total', total: 150, wickets: 3, overs: 20 },
      { scoreboard: 2, team_id: 2, type: 'total', total: 145, wickets: 5, overs: 20 },
    ],
    batting: [
      { id: 1, batsman: { fullname: 'John Doe' }, score: 50, ball: 30, four_x: 4, six_x: 2, rate: 166.6, active: true, scoreboard: 1, fow_balls: 0, catchstump: null, bowler: null },
      { id: 2, batsman: { fullname: 'Alex Smith' }, score: 30, ball: 25, four_x: 2, six_x: 1, rate: 120.0, active: false, scoreboard: 1, fow_balls: 0, catchstump: null, bowler: null },
    ],
    bowling: [
      { id: 1, bowler: { fullname: 'Chris Martin' }, overs: 4, medians: 20, runs: 25, wickets: 1, rate: 6.25, active: false, scoreboard: 2 },
      { id: 2, bowler: { fullname: 'David Warner' }, overs: 4, medians: 25, runs: 30, wickets: 2, rate: 7.5, active: false, scoreboard: 2 },
    ],
  },
};

const LiveScore = () => {
  const [score] = useState(dummyData.score);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.matchNote}>{score.note}</Text>

        {score.scoreboards.map(board => (
          <Accordion
            key={board.scoreboard}
            title={() => (
              <ScoreBoard
                score={board}
                team={board.team_id === score.localteam.id ? score.localteam.name : score.visitorteam.name}
              />
            )}
            content={() => (
              <>
                <Batting batting={score.batting} battingTeam={board.scoreboard} />
                <Bowling bowling={score.bowling} bowlingTeam={board.scoreboard} />
              </>
            )}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.placeBets}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative' },
  matchNote: {
    color: Config.errorColor,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    fontWeight: 'bold',
  },
  placeBets: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Config.primaryColor,
    padding: 20,
    borderRadius: 50,
    elevation: 5,
  },
});

export default LiveScore;
