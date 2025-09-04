import { Text, View, StatusBar, StyleSheet } from "react-native";
export default function BibliotecaScreen({ navigation }){
    return(
        <View style={styles.container}>
              <Text style={styles.text}>Biblioteca</Text>
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
  },
  text: {
        color: "#ffffff",
        fontWeight: "semibold",
  },
});