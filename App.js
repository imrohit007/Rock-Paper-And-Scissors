import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import RockPaper from './components/RockPaper';


export default function App() {
  return (
    <View style={styles.container}>
      <RockPaper/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});