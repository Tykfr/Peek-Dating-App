import React from 'react';
import { Text,TextInput,Button } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const Prompt = ({prompt}) => {
    return (
    <Card title={prompt.prompt}>
        
    </Card>    

    )
}

export default Prompt;

