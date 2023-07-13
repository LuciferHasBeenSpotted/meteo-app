import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from "react";

import Settings from "../settings/Settings";
import Search from "../search/Search";
import { Context } from "./Context";

const Tab = createBottomTabNavigator();

export default function Nav() {
    const { theme } = useContext(Context);
    return (
        <Tab.Navigator 
            screenOptions={{
            tabBarStyle: { backgroundColor: theme, borderColor: "#3f101c", padding: 10 },
            tabBarActiveTintColor: 'white',
            }}
        >
            <Tab.Screen
                name="Rechercher une ville"
                component={Search}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon name="search" color="white" size={size} />
                    ),
                    headerStyle: { backgroundColor: theme},
                    tabBarLabel: '',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                }}
            />
            <Tab.Screen
                name="Parametres"
                component={Settings}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon name="cog" color="white" size={size} />
                    ),
                    headerStyle: { backgroundColor: theme },
                    tabBarLabel: '',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                }}
            />
        </Tab.Navigator>
    );
}
