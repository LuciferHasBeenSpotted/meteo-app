import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Settings from "../settings/Settings";
import Search from "../search/Search";
import styles from '../../styles';

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <Tab.Navigator 
            screenOptions={{
            tabBarStyle: { backgroundColor: styles.color, borderColor: "#3f101c", padding: 10 },
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
                        headerStyle: { backgroundColor: styles.color }, tabBarLabel: '', headerTintColor: 'white'
                    }}
            />
            <Tab.Screen
                name="Parametres"
                component={Settings}
                options={{
                tabBarIcon: ({ size }) => (
                    <Icon name="cog" color="white" size={size} />
                    ), headerStyle: { backgroundColor: styles.color }, tabBarLabel: '', headerTintColor: 'white'
                }}
            />
        </Tab.Navigator>
    );
}
