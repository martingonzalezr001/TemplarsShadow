import { createStackNavigator } from "@react-navigation/stack";


import MazmorrasScreen from "../screens/biblioteca-subscreens/MazmorrasScreen";

import EstanciasScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/EstanciasScreen";
import GuaridasScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/GuaridasScreen";
import HabitacionesEspecialesScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/HabitacionesEspecialesScreen";
import PuertasSecretasScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/PuertasSecretasScreen";
import TrampasScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/TrampasScreen";
import SeccionesScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/SeccionesScreen";
import TesorosScreen from "../screens/biblioteca-subscreens/mazmorras-subscreens/TesorosScreen";

const Stack = createStackNavigator();

export default function MazmorrasNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>

            <Stack.Screen name="MazmorrasMain" component={MazmorrasScreen}/>
            <Stack.Screen name="Estancias" component={EstanciasScreen}/>
            <Stack.Screen name="Guaridas" component={GuaridasScreen}/>
            <Stack.Screen name="Habitaciones Especiales" component={HabitacionesEspecialesScreen}/>
            <Stack.Screen name="Tesoros" component={TesorosScreen}/>
            <Stack.Screen name="Trampas" component={TrampasScreen}/>
            <Stack.Screen name="Secciones Pasillos" component={SeccionesScreen}/>
            <Stack.Screen name="Puertas Secretas" component={PuertasSecretasScreen}/>
            
        </Stack.Navigator>
    );
}