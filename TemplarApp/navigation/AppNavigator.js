import { createStackNavigator } from "@react-navigation/stack";
import BibliotecaScreen from "../screens/BibliotecaScreen";
import HomeScreen from "../screens/HomeScreen";
import CrearPersonajeScreen from "../screens/CrearPersonajeScreen";
import AvCooperativasScreen from "../screens/AvCooperativasScreen";
import DiseñarMazmorraScreen from '../screens/DiseñarMazmorraScreen'
import DadosVirtualesScreen from '../screens/DadosVirtualesScreen';


const Stack = createStackNavigator();

export default function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Biblioteca" component={BibliotecaScreen}/>
            <Stack.Screen name="Crear Personaje" component={CrearPersonajeScreen}/>
            <Stack.Screen name="Aventuras Cooperativas" component={AvCooperativasScreen}/>
            <Stack.Screen name="Diseñar Mazmorra" component={DiseñarMazmorraScreen} />
            <Stack.Screen name="Dados Virtuales" component={DadosVirtualesScreen} />
        </Stack.Navigator>
    )
}