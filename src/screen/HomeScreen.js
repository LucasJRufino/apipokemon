import React, { useState } from "react";
import { ActivityIndicator, Button, FlatList, TextInput, View, StyleSheet } from "react-native";
import { buscaPokemonPorNome } from "../services/PokemonService";
import { PokemonItem } from "../components/PokemonItem/PokemonItem";

const HomeScreen = () => {
    const [itemBusca, setItemBusca] = useState('');
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons ] = useState([]);
    
    const handleBuscaPokemon = async () => {
        setLoading(true);
        try{
        const listaDeEncontrados = await buscaPokemonPorNome(itemBusca);
        setPokemons(listaDeEncontrados);
    } catch(err){
        console.error('Erro na busca: ', err);
        setPokemons([]);
    }
    setLoading(false);
    }
    return(
        <View>
            <TextInput
                value={itemBusca}
                onChangeText={(item)=> setItemBusca(item)}
                placeholder="Digite um pokemon"
                style={styles.inputText}
                />

            <Button title="Buscar"
            onPress={handleBuscaPokemon} />
            { loading && <ActivityIndicator style={styles.spinner}/>}
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (<PokemonItem pokemon={item}/>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        borderColor:'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop:100,
        paddingHorizontal: 10
    },
    spinner: {
        marginTop: 20
    }
})

export {HomeScreen};