import { Text, View, StatusBar, StyleSheet } from "react-native";
export default function DirectorJuegoScreen({ navigation }){
    return(
        <View style={styles.container}>
              <Text style={styles.text}>Director de Juego</Text>
            </View>
    );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },

   text: {
        color: "#ffffff",
        fontWeight: "semibold",

  },
});