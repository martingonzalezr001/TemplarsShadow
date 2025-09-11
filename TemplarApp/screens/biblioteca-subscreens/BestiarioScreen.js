import { Text, View, StatusBar, StyleSheet } from "react-native";
export default function BestiarioScreen({ navigation }){
    return(
        <View style={styles.container}>
              <Text style={styles.text}>Bestiario</Text>
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