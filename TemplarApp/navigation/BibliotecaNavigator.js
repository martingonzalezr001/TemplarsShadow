import { createStackNavigator } from "@react-navigation/stack";
import MazmorrasScreen from "../screens/biblioteca-subscreens/MazmorrasScreen";
import DirectorJuegoScreen from "../screens/biblioteca-subscreens/DirectorJuegoScreen";
import ReliquiasScreen from "../screens/biblioteca-subscreens/ReliquiasScreen";
import BestiarioScreen from "../screens/biblioteca-subscreens/BestiarioScreen";
import BibliotecaScreen from "../screens/BibliotecaScreen";
import MazmorrasNavigator from "./MazmorrasNavigator";

const Stack = createStackNavigator();
export default function BibliotecaNavigator(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BibliotecaMain" component={BibliotecaScreen}/>
             <Stack.Screen name="Mazmorras" component={MazmorrasNavigator}/>
             <Stack.Screen name="Director Juego" component={DirectorJuegoScreen}/>
             <Stack.Screen name="Reliquias" component={ReliquiasScreen}/>
             <Stack.Screen name="Bestiario" component={BestiarioScreen}/>
         </Stack.Navigator>
     );
}