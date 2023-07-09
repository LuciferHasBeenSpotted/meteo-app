import React, { useState, useContext } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import styles, { updateColor } from "../../styles";
import { ColorContext } from "../utils/ColorContext";

export default function ColorPick() {
    const [color, setColor] = useState(styles.color);
    const { setTheme, darkmode } = useContext(ColorContext);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: color,
                },
            });
        }, [color])
    );

    function handleOnColorChange(color) {
        setColor(color);
    }

    function handleOnPress() {
        updateColor(color);
        setTheme(color);
    }

    return (
        <View style={[{flex: 1}, darkmode ? styles.darkmode : {backgroundColor: 'white'}]}>
            <View style={[{ margin: 20, alignItems: "center"}]}>
                <View
                    style={{ width: Dimensions.get("window").width * 0.8, height: 50 }}
                >
                    <ColorPicker color={color} onColorChange={handleOnColorChange} />
                </View>
                <View style={{ marginTop: 300 }}>
                    <TouchableHighlight
                        style={{
                            width: Dimensions.get("window").width * 0.8,
                            height: 30,
                            backgroundColor: color,
                            }}
                        onPress={handleOnPress}
                    >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>Appliquer !</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
