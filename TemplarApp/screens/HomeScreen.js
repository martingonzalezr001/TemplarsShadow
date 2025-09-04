import { View, StyleSheet, Image } from "react-native";
import MainMenuButton from "../components/MainMenuButton";

export  default function HomeScreen({ navigation }){

    const menuItems = [
        { title: "BIBLIOTECA", screen: "Biblioteca"},
        { title: "CREA TU PERSONAJE", screen: "Crear Personaje"},
        { title: "AVENTURAS COOPERATIVAS", screen: "Aventuras Cooperativas"},
        { title: "DISEÑA TU MAZMORRA", screen: "Diseñar Mazmorra"},
        { title: "DADOS VIRTUALES", screen: "Dados Virtuales"},
    ]

    return(
        <View style={styles.container}>
            <Image style={styles.img_logo} source={require("../assets/logoPruebaTS.png")}></Image>
            <View style={styles.menu}>
                {menuItems.map((item) => (
                    <MainMenuButton
                    key={item.screen}
                    title={item.title}
                    onPress={() => navigation.navigate(item.screen)}/>
                )
            )}
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#f5f5dc"
    },
    img_logo:{
        flex:0.4,
        justifyContent: "center",
        height: 250,
        width: 250,
        margin: "auto",
    },
    menu:{
        flex: 0.6,
        justifyContent: "center"
    },
})