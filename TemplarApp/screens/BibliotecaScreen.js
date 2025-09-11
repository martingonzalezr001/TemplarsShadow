import { View, StatusBar, StyleSheet, Image } from "react-native";
import MainMenuButton from "../components/MainMenuButton";
import TitleSection from "../components/TitleSection";
export default function BibliotecaScreen({ navigation }){

  const title = "BIBLIOTECA"
  const menuItems = [
    {title: "MAZMORRAS", screen: "Mazmorras"},
    {title: "DIRECTOR DE JUEGO", screen: "Director Juego"},
    {title: "RELIQUIAS", screen: "Reliquias"},
    {title: "BESTIARIO", screen: "Bestiario"},
  ]
    return(
        <View style={styles.container}>
              <TitleSection
              title={title}
              />
              <View style={styles.container_menu}>
                {menuItems.map((item) =>(
                  <MainMenuButton
                  key={item.screen}
                  title={item.title}
                  onPress={() => navigation.navigate(item.screen)}
                  />
                ) )}

              </View>
              
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


  container_menu:{
    flex:0.66,
    flexDirection: "column"
  }
});