import React from 'react';
import { View, Text } from 'react-native';

export function GreetComponent({ name }: { name: string }) {
    return (
        <View>
            <Text>Hello, {name}!</Text>
        </View>
    );
}

