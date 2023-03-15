import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: -52,
    marginBottom: 42
  },
  countContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  countView: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center"
  },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9,
    backgroundColor: "#333333"
  },
  countBadgeText: {
    color: "#D9D9D9",
  },
  countCreatedText: {
    fontWeight: "700",
    fountSize: 14,
    color: "#4EA8DE",
    marginRight: 10,
  },
  countDoneText: {
    fontWeight: "700",
    fountSize: 14,
    color: "#8284FA",
    marginRight: 10,
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#333333",
    borderStyle: "solid",
    borderTopWidth: 1,
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  listEmptyImage: {
    margin: 16
  },
  listEmptyTitle: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center"
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center"
  }
})