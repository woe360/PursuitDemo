// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//
// const ToggleButtons = () => {
//   const [selected, setSelected] = useState('upcoming');
//
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.button, selected === 'upcoming' && styles.selectedButton]}
//         onPress={() => setSelected('upcoming')}
//       >
//         <Text style={selected === 'upcoming' ? styles.selectedText : styles.text}>Upcoming</Text>
//       </TouchableOpacity>
//
//       <TouchableOpacity
//         style={[styles.button, selected === 'past' && styles.selectedButton]}
//         onPress={() => setSelected('past')}
//       >
//         <Text style={selected === 'past' ? styles.selectedText : styles.text}>Past</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     margin: 5,
//     width: 110,
//   },
//   selectedButton: {
//     backgroundColor: 'rgba(151,151,151,0.45)',
//   },
//   text: {
//     color: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   selectedText: {
//     color: '#40DA46',
//     textAlign: 'center',
//   },
// });
//
// export default ToggleButtons;




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButtons = ({onToggle}) => {
  const [selected, setSelected] = useState('upcoming');

  const handlePress = (selection) => {
    setSelected(selection);
    onToggle(selection);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selected === 'upcoming' && styles.selectedButton]}
        onPress={() => handlePress('upcoming')}
        // onPress={() => setSelected('upcoming')}
      >
        <Text style={selected === 'upcoming' ? styles.selectedText : styles.text}>Upcoming</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selected === 'past' && styles.selectedButton]}
        onPress={() => handlePress('past')}
        // onPress={() => setSelected('past')}
      >
        <Text style={selected === 'past' ? styles.selectedText : styles.text}>Past</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    width: 110,
  },
  selectedButton: {
    backgroundColor: 'rgba(151,151,151,0.45)',
  },
  text: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  selectedText: {
    color: '#40DA46',
    textAlign: 'center',
  },
});

export default ToggleButtons;
