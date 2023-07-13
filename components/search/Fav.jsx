import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../utils/Context';

import Results from './Results';

export default function Fav() {
    const { theme, fav } = useContext(Context);
    return (
        fav ? (
            <View style={{marginTop: 40, marginBottom: 40}}>
            <Results city={fav} nbDay={14} mode='fav'/>    
        </View>
        ) : null
    );
};