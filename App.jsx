import { View, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Nav from './components/utils/Nav';
import Results from './components/search/Results';
import ColorPick from './components/settings/ColorPick'
import { ColorProvider } from "./components/utils/Context";
import LightMode from "./components/settings/LightMode";
import ResetColor from './components/settings/ResetColor';

export default function App() {       
    const Stack = createStackNavigator();
    return (
        <ColorProvider>
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
                        <Stack.Screen 
                            name="Results" 
                            component={Results} 
                            options= {{
                                headerTitle: 'Résultat de recherche', 
                                headerTitleAlign: 'center', 
                                headerTintColor: 'white',
                                headerBackTitle: ' ',
                            }} 
                        />
                        <Stack.Screen 
                            name="ColorPick" 
                            component={ColorPick} 
                            options= {{
                                headerTitle: "Couleur de l'application", 
                                headerTitleAlign: 'center', 
                                headerTintColor: 'white',
                                headerBackTitle: ' ',
                            }} 
                        />
                        <Stack.Screen 
                            name="LightMode" 
                            component={LightMode} 
                            options= {{
                                headerTitle: 'Préférence de luminosité', 
                                headerTitleAlign: 'center', 
                                headerTintColor: 'white',
                                headerBackTitle: ' ',
                            }} 
                        />
                        <Stack.Screen 
                        name="ResetColor" 
                        component={ResetColor} 
                        options= {{
                            headerTitle: 'Remettre la couleur de base', 
                            headerTitleAlign: 'center', 
                            headerTintColor: 'white',
                            headerBackTitle: ' ',
                        }} 
                    />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </ColorProvider>
    );
}
