import { Text, View, StatusBar, StyleSheet } from "react-native";
export default function DiseñarMazmorraScreen({ navigation }){
    return(
        <View style={styles.container}>
              <Text style={styles.text}>Diseña tu Mazmorra</Text>
              <StatusBar style="auto" />
            </View>
    );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },

  text: {
    color: "#ffffff",
    fontWeight: "semibold",

  }
});