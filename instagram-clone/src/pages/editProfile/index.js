import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LabelHTMLAttributes } from "react";
import imagem from '../../../assets/stories/caetano.jpg'

export default function EditarPerfil() {
    return (
        <View style={styles.container}>

            <View style={styles.menuSuperior}>
                <TouchableOpacity>
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
                    <TextInput style={styles.input} placeholder={""} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Username </Text>
                    <TextInput style={styles.input} placeholder={""} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Email </Text>
                    <TextInput style={styles.input} placeholder={""} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                    <Text style={styles.textoLabel}>Bio </Text>
                    <TextInput style={styles.input} placeholder={""} />
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
    containerInputs: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%',
    },
    input: {
        width: '70%',
        borderWidth: 0.3,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginLeft: '5%',
    },
    textoLabel: {
        fontSize: 17, 
        justifyContent: 'space-between', 
        textAlign: 'left', 
        alignItems: 'flex-start'
    }
})