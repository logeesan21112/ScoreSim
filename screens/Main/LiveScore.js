import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Config from '../../common/config';
import CustomHeader from '../../components/CustomHeader';
import ScoreBoard from '../../components/Matches/ScoreBoard';
import Batting from '../../components/Matches/Batting';
import Bowling from '../../components/Matches/Bowling';
import Accordion from '../../components/Matches/Accordion';

const dummyMatches = [
  {
    id: '1',
    league: 'ICC International Series',
    note: 'Match in progress',
    localteam: { id: 1, name: 'Sri Lanka' },
    visitorteam: { id: 2, name: 'Australia' },
    scoreboards: [
      { scoreboard: 1, team_id: 1, type: 'total', total: 180, wickets: 4, overs: 20 },
      { scoreboard: 2, team_id: 2, type: 'total', total: 150, wickets: 6, overs: 20 },
    ],
    batting: [
      { id: 1, batsman: { fullname: 'Kusal Perera' }, score: 60, ball: 35, four_x: 5, six_x: 2, rate: 171.4, active: true, scoreboard: 1 },
      { id: 2, batsman: { fullname: 'Bhanuka Rajapaksa' }, score: 45, ball: 25, four_x: 3, six_x: 2, rate: 180.0, active: false, scoreboard: 1 },
      { id: 3, batsman: { fullname: 'Dasun Shanaka' }, score: 35, ball: 20, four_x: 2, six_x: 1, rate: 175.0, active: false, scoreboard: 1 },
      { id: 4, batsman: { fullname: 'David Warner' }, score: 70, ball: 40, four_x: 6, six_x: 3, rate: 175.0, active: true, scoreboard: 2 },
      { id: 5, batsman: { fullname: 'Aaron Finch' }, score: 50, ball: 30, four_x: 4, six_x: 2, rate: 166.6, active: false, scoreboard: 2 },
      { id: 6, batsman: { fullname: 'Glenn Maxwell' }, score: 30, ball: 20, four_x: 2, six_x: 1, rate: 150.0, active: false, scoreboard: 2 },
    ],
    bowling: [
      { id: 1, bowler: { fullname: 'Wanindu Hasaranga' }, overs: 4, medians: 20, runs: 28, wickets: 1, rate: 7.0, active: false, scoreboard: 1 },
      { id: 2, bowler: { fullname: 'Dushmantha Chameera' }, overs: 4, medians: 22, runs: 30, wickets: 2, rate: 7.5, active: false, scoreboard: 1 },
      { id: 3, bowler: { fullname: 'Mitchell Starc' }, overs: 4, medians: 25, runs: 35, wickets: 2, rate: 8.75, active: false, scoreboard: 2 },
      { id: 4, bowler: { fullname: 'Pat Cummins' }, overs: 4, medians: 28, runs: 40, wickets: 1, rate: 10.0, active: false, scoreboard: 2 },
    ],
  },
  {
    id: '2',
    league: 'ICC International Series',
    note: 'Match in progress',
    localteam: { id: 3, name: 'India' },
    visitorteam: { id: 4, name: 'Pakistan' },
    scoreboards: [
      { scoreboard: 3, team_id: 3, type: 'total', total: 200, wickets: 3, overs: 20 },
      { scoreboard: 4, team_id: 4, type: 'total', total: 180, wickets: 5, overs: 20 },
    ],
    batting: [
      { id: 5, batsman: { fullname: 'Virat Kohli' }, score: 80, ball: 50, four_x: 8, six_x: 2, rate: 160.0, active: true, scoreboard: 3 },
      { id: 6, batsman: { fullname: 'Rohit Sharma' }, score: 60, ball: 35, four_x: 5, six_x: 3, rate: 171.4, active: false, scoreboard: 3 },
      { id: 7, batsman: { fullname: 'Shreyas Iyer' }, score: 40, ball: 25, four_x: 4, six_x: 1, rate: 160.0, active: false, scoreboard: 3 },
      { id: 8, batsman: { fullname: 'Babar Azam' }, score: 75, ball: 45, four_x: 7, six_x: 1, rate: 166.6, active: true, scoreboard: 4 },
      { id: 9, batsman: { fullname: 'Fakhar Zaman' }, score: 50, ball: 30, four_x: 4, six_x: 2, rate: 166.6, active: false, scoreboard: 4 },
      { id: 10, batsman: { fullname: 'Mohammad Rizwan' }, score: 40, ball: 25, four_x: 3, six_x: 1, rate: 160.0, active: false, scoreboard: 4 },
    ],
    bowling: [
      { id: 5, bowler: { fullname: 'Jasprit Bumrah' }, overs: 4, medians: 24, runs: 28, wickets: 1, rate: 7.0, active: false, scoreboard: 3 },
      { id: 6, bowler: { fullname: 'Mohammed Shami' }, overs: 4, medians: 22, runs: 30, wickets: 2, rate: 7.5, active: false, scoreboard: 3 },
      { id: 7, bowler: { fullname: 'Shaheen Afridi' }, overs: 4, medians: 25, runs: 30, wickets: 2, rate: 7.5, active: false, scoreboard: 4 },
      { id: 8, bowler: { fullname: 'Haris Rauf' }, overs: 4, medians: 20, runs: 28, wickets: 1, rate: 7.0, active: false, scoreboard: 4 },
    ],
  },
];

const LiveScore = ({ route }) => {
  const { match } = route.params || {};
  const [score] = useState(match || dummyMatches[0]);

  return (
    <View style={styles.container}>
      <CustomHeader title="CricApp" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.matchNote}>{score.note}</Text>

        <Accordion
          title={() => (
            <ScoreBoard score={score.scoreboards[0]} team={score.localteam.name} />
          )}
          icon={({ open }) => (
            <Icon name={open ? 'chevron-up' : 'chevron-down'} size={20} color={Config.primaryColor} />
          )}
          content={() => (
            <>
              <Batting batting={score.batting} battingTeam={score.scoreboards[0].team_id} />
              <Bowling bowling={score.bowling} bowlingTeam={score.scoreboards[0].team_id} />
            </>
          )}
        />

        <Accordion
          title={() => (
            <ScoreBoard score={score.scoreboards[1]} team={score.visitorteam.name} />
          )}
          icon={({ open }) => (
            <Icon name={open ? 'chevron-up' : 'chevron-down'} size={20} color={Config.primaryColor} />
          )}
          content={() => (
            <>
              <Batting batting={score.batting} battingTeam={score.scoreboards[1].team_id} />
              <Bowling bowling={score.bowling} bowlingTeam={score.scoreboards[1].team_id} />
            </>
          )}
        />
      </ScrollView>

      <TouchableOpacity style={styles.placeBets}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative', backgroundColor: Config.backgroundColor },
  matchNote: {
    color: Config.errorColor,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    fontWeight: 'bold',
    fontSize: 16,
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