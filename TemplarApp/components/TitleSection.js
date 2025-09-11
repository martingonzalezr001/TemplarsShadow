import { Text, View, StyleSheet, Image } from "react-native";


export default function TitleSection({ title }){
    return(
        <View style={styles.container_title}>
                        <Image style={styles.img_title} source={require("../assets/MiniLogoTS.png")}></Image>
                        <Text style={styles.text_title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container_title:{
    flex: 0.25,
    flexDirection: "row",
    marginVertical:16,
    marginTop:32
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
    marginVertical: 16,
    marginTop:32,

  },
})