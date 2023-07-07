import { useState } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import ColorPicker from 'react-native-wheel-color-picker';

export default function ColorPick() {
    const [color, setColor] = useState(colorState.color);
  
    const handleSetColor = (choosedColor) => {
      setColor(choosedColor);
    };
  
    return (
      <View style={{margin: 20, alignItems: 'center'}}>
        <View style={{width: Dimensions.get('window').width * 0.8, height: 50}}>
          <ColorPicker onColorChange={choosedColor => handleSetColor(choosedColor)}/>
        </View>
        <View style={{marginTop: 300}}>
          <TouchableHighlight style={{width: Dimensions.get('window').width * 0.8, height: 30, backgroundColor: color}} onPress={handleOnPress}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Appliquer !</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  
