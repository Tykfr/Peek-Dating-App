import React, { useState } from 'react';
import { Text,TextInput,Button } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const Prompt = ({prompt}) => {
    const [text,setText] = useState("");
    return (
    <Card title={prompt.prompt}>
            <TextInput
                onChangeText= {text => setText(text)}
            />
        <Button
            title="Apply"
            
        />
        </Card>    

    )
}

export default Prompt;

