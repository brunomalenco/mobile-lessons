import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useMemo, useState } from "react";

import Auth from "../pages/auth";
import Login from "../pages/login";
import AuthContext from "./auth_context";
import HomeScreenRouters from "./home_screen_routes";
import { doLogin } from "../services/requests/users";
import { Alert } from "react-native";
import EditarPerfil from "../pages/editProfile";

const Stack = createStackNavigator();

export default function LoginRouters() {

    const [isSignedIn, setisSignedIn] = useState(true);

    // Pode tentar recuperar o token, 
    // para que o usuário não precise 
    // logar novamente
    // useEffect(() => {
    //     setisSignedIn(true);
    // }, []);

    async function loginAction(data) {
        user = await doLogin(data.username, data.password)
        console.log(user.length);
        if (user.length) {
            setisSignedIn(true);
        } else {
            setisSignedIn(false);
            Alert.alert("Erro ao fazer login", "usuário não foi encontrado em nossa base de dados.");
        }
    }

    const authContext = useMemo(() => ({
        signIn: (data) => loginAction(data),
        signOut: (data) => {
            setisSignedIn(false);
        }
    }), []);

    const LoginState = () => {
        return <Login onPress={() => {
            setisSignedIn(!isSignedIn);
        }} />
    };

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="home_screen_routers" component={HomeScreenRouters} />
                        <Stack.Screen name="tela_editar_perfil" component={EditarPerfil} />
                        
                    </>
                ) : (
                    <>
                        <Stack.Screen name="auth" component={Auth} />
                        <Stack.Screen name="login" component={LoginState} />

                    </>
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
}