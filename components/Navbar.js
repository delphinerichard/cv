import { StyleSheet, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.lateralMenuButton} onPress={() => alert('You pressed a button.')}>
        <Icon style={styles.lateralMenuButtonIcon} size={20} name="bars"></Icon>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 50,
    alignContent: 'left',
    backgroundColor: '#A31621',
  },
  lateralMenuButton: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'left',
    justifyContent: 'left',
    flexDirection: 'row',
  },
  lateralMenuButtonIcon: {
    padding: 10,
    color: 'white'
  },
});
