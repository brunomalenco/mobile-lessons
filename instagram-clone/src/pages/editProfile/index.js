import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import imagem from '../../../assets/stories/caetano.jpg'
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function EditarPerfil() {

    const navigator = useNavigation()
    return (
        <View style={styles.container}>

            <View style={styles.menuSuperior}>
                <TouchableOpacity onPress={() => {navigator.goBack()}}>
                    <Text style={{ marginLeft: 5, marginTop: 5, fontSize: 18 }}>Cancelar</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 5, fontSize: 20, fontWeight: '500' }}>Editar Perfil</Text>

                <TouchableOpacity>
                    <Text style={{ marginRight: 5, marginTop: 5, fontSize: 18, color: '#3897F0' }}>Concluido</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerUsuario}>
                <Image style={styles.imagemPerfil} source={imagem} />
                <TouchableOpacity>
                    <Text style={styles.textoMudarImagemPerfil}>Mudar foto de perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerInputs}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Nome </Text>
                    <TextInput style={styles.input} value='Caetano' />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Username </Text>
                    <TextInput style={styles.input} value="Caetanovns"/>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Email </Text>
                    <TextInput style={styles.input} value="caetano@gmail.com" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Bio </Text>
                    <TextInput style={styles.input} value="Professor da UNIFAP" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuSuperior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4
    },
    containerUsuario: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7%'
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: '5%'
    },
    textoMudarImagemPerfil: {
        color: '#3897F0',
        fontSize: 16
    },
    containerInputs:{
        marginTop: 30
    },
    textoLabel:{
        paddingLeft: 10,
        fontSize: 17
    },
    input:{
        width: '50%',
        borderBottomWidth: 0.3,
        marginRight: '10%'
    }
})