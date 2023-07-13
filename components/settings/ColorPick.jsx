import { useState, useContext, useCallback } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Context } from "../utils/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../utils/styles";

export default function ColorPick() {
    const { theme, setTheme, darkmode } = useContext(Context);
    const [color, setColor] = useState(theme);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: color,
                },
            });
        }, [color])
    );

    async function handleOnPress() {
        setTheme(color);
        await AsyncStorage.setItem('theme', color);
    }

    return (
        <View style={[{flex: 1}, darkmode ? styles.darkmode : {backgroundColor: 'white'}]}>
            <View style={[{ margin: 20, alignItems: "center"}]}>
                <View
                    style={{ width: Dimensions.get("window").width * 0.8, height: 50 }}
                >
                    <ColorPicker color={color} onColorChange={setColor} />
                </View>
                <View style={{ marginTop: 300 }}>
                    <TouchableHighlight
                        style={{
                            width: Dimensions.get("window").width * 0.8,
                            height: 30,
                            backgroundColor: color,
                            borderRadius: 5
                            }}
                        onPress={handleOnPress}
                        underlayColor='none'
                    >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 15, textAlign: "center", color: "white", fontWeight: '700' }}>APPLIQUER !</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
