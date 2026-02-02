import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={styles.header}>
          <View style={styles.title}>{title()}</View>
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={32} color="#333" />
        </View>
      </TouchableOpacity>
      {expanded && <View>{content()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { flex: 1 },
});

export default Accordion;