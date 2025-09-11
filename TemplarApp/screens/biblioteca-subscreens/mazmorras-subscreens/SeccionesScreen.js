import { View, Text, StyleSheet } from "react-native";
import CartasList from "../../../components/CardsList";
import TitleSection from "../../../components/TitleSection";


export default function SeccionesScreen(){
    return(
            <View style={styles.container}>
              <TitleSection
              title={"SECCIONES PASILLOS"}/>
              <CartasList
              tipo={"SECCIONES PASILLOS"}/>      
            </View>
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
  },

   text: {
        color: "#1c1c1c",
        fontWeight: "semibold",

  },
});