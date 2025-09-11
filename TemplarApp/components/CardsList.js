import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function CartasList({ tipo }) {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    const fetchCartas = async () => {
      try {
        const response = await fetch(
          "https://martinglezrguez.es/TemplarShadow/cartas/cartas.json"
        );
        const data = await response.json();

        // Filtra cartas por tipo
        const filtradas = data.filter((carta) => carta.Tipo === tipo);
        setCartas(filtradas);
      } catch (error) {
        console.error("Error al cargar cartas:", error);
      }
    };

    fetchCartas();
  }, [tipo]);

  return (
    <FlatList
      data={cartas}
      keyExtractor={(item, index) => `${item.Nombre}-${index}`}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: encodeURI(item.Imagen) }} style={styles.image} />
          <Text style={styles.title}>{item.Nombre}</Text>
          {item.Descripcion ? (
            <Text style={styles.desc}>{item.Descripcion}</Text>
          ) : null}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { /* ... */ },
  image: { 
    resizeMode:"contain",
    height:225,
    width:150,
   },
  title: { /* ... */ },
  desc: { /* ... */ },
});
