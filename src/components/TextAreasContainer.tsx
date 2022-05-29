import React, {useState} from 'react';
import {Button, Grid} from "semantic-ui-react";
import './TextAreasContainer.css'
import EnglishTextArea from "./EnglishTextArea";
import PlainEnglishTextArea from "./PlainEnglishTextArea";
import axios from "axios";

function TextAreasContainer() {
    const [text, setText] = useState('');
    const [plainText, setPlainText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleOnConvert(){
        setIsLoading(true)
        const result = await axios.post('http://localhost:7071/api/ModelHttpTrigger',text)
        setIsLoading(false)
        setPlainText(result.data)
    }

    return (
        <div className='text-area-container'>
            <Grid divided='vertically' centered padded='horizontally'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <EnglishTextArea setText={setText}/>
                    </Grid.Column>
                    <Grid.Column>
                        <PlainEnglishTextArea plainText={plainText} isLoading={isLoading}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="button-container">
                <Button onClick={() => handleOnConvert()} color='blue'>Convert into Plain English</Button>
            </div>
        </div>
    );
}

export default TextAreasContainer;
