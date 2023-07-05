import { View, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Nav from './components/utils/Nav';
import Results from './components/search/Results';
import styles from "./styles";

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.view_app}>
            <StatusBar hidden={true}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
                    <Stack.Screen 
                        name="Results" 
                        component={Results} 
                        options={{ 
                            headerTitle: 'Résultat de recherche', 
                            headerStyle: { backgroundColor: styles.color }, 
                            headerTintColor: 'white',
                            headerBackTitle: ' ',
                        }} 
                        />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
