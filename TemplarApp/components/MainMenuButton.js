// components/MenuButton.js
import { Pressable, Text, StyleSheet } from "react-native";

export default function MainMenuButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9b111e",
    borderColor: "#d4af37",
    borderWidth: 2,
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});