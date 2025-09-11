import { Text, View, Image, StyleSheet } from "react-native";
import TitleSection from "../../components/TitleSection";
import MainMenuButton from "../../components/MainMenuButton";
export default function MazmorrasScreen({ navigation }){

  const mazmorraItems = [
    {title:"ESTANCIAS", screen:"Estancias"},
    {title:"TRAMPAS", screen:"Trampas"},
    {title:"PUERTAS SECRETAS", screen:"Puertas Secretas"},
    {title:"SECCIONES DE PASILLOS",screen:"Secciones Pasillos"},
    {title:"TESOROS",screen:"Tesoros"},
    {title:"HABITACIONES ESPECIALES",screen:"Habitaciones Especiales"},
    {title:"GUARIDAS",screen:"Guaridas"},
  ]

  const title = "MAZMORRAS";

    return(
        <View style={styles.container}>
              <TitleSection
              title={title}
              
              />
              <View style={styles.container_menu}>

              {mazmorraItems.map((item) => (
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

   container_title:{
    flex: 0.20,
    flexDirection: "row",
    marginVertical:32,
  },
  img_title:{
    flex: 0.33,
    height: 120
  },
  text_title:{
    flex:0.66,
    fontWeight: "bold",
    fontSize: 32,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "auto",
    marginVertical: 32,



  },

  container_menu:{
    flex:0.80,
    flexDirection: "column",
    marginBottom:40
  }
});