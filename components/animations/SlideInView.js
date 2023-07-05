import React, { useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

export default function SlideInView({ children, index }) {
    const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').width));
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) {
            Animated.timing(slideAnim, {
                toValue: 0,
                delay: 50 * index,
                useNativeDriver: true,
            }).start(() => setInitialized(true));
          }
    }, [slideAnim, index, initialized]);

    return (
        <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            {children}
        </Animated.View>
    );
}
