import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { buscaPokemonPorNome } from "../../services/PokemonService";
import { infoPokemon } from "../../services/PokemonService";



const PokemonItem = ({pokemon}) => {
    const{
        name: nome,
        height: altura,
        weight: peso,
    } = pokemon;

    const showAlert = () =>
    Alert.alert(
      'Info',
      infoPokemon(buscaPokemonPorNome(nome)),
    );
    
    return(
        <TouchableOpacity onPress={showAlert}>
        <View>
            <Text>{`Nome: ${nome}`}</Text>
            <Text>{`Altura: ${altura}`}</Text>
            <Text>{`Peso: ${peso}`}</Text>
            <Image source={{uri: pokemon.sprites.front_default}}/>
            </View>
        </TouchableOpacity>
    )
    }

export{PokemonItem};