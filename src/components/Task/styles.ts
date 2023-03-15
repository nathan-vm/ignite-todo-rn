import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    padding: 12,
    backgroundColor: "#262626",
    borderStyle: "solid",
    borderColor: "#333333",
    borderWidth: 1,
    height: 64,
    borderRadius: 8,
  },
  clickableContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  icon:{
    color: '#4EA8DE',
    marginRight: 8,
  },
  iconDone:{
    color: '#8284FA',
    marginRight: 8,
  },
  text:{
    color: "#fff",
    fontSize: 15,
    marginRight: 14,
  },
  trash:{
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});