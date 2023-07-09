import { View, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Nav from './components/utils/Nav';
import Results from './components/search/Results';
import ColorPick from './components/settings/ColorPick'
import { ColorProvider } from "./components/utils/ColorContext";
import styles from "./styles";
import LightMode from "./components/settings/LightMode";

const Stack = createStackNavigator();

export default function App() {
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
                                headerStyle: { backgroundColor: styles.color},
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
                                headerStyle: { backgroundColor: styles.color },
                                headerTitleAlign: 'center', 
                                headerTintColor: 'white',
                                headerBackTitle: ' '
                            }} 
                        />
                        <Stack.Screen 
                            name="LightMode" 
                            component={LightMode} 
                            options= {{ 
                                headerTitle: "Mode clair/sombre",
                                headerStyle: { backgroundColor: styles.color },
                                headerTitleAlign: 'center', 
                                headerTintColor: 'white',
                                headerBackTitle: ' '
                            }} 
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </ColorProvider>
);
}
