 import React,  { useState } from 'react';

import Content from '../Content'
import { Language, DefaultLang} from './Language';


 const SpeechApi = () => {
    const apiKey = '3173a361c4ea4e149a23a59f6a779ce2';
    const [language, setLanguage] = useState(DefaultLang.Language)
    const [speech, setSpeed] = useState(DefaultLang.SPEED);
    const [speed, setSpeech] = useState(DefaultLang.SPEECH);
    
  const handleClick = () => {
  	 const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=${language}&r=${speed}`
         
      setSpeech(audioSrc);
  }

 return (
   <div>
    <div item xs={12}>
          <Content 
            variant="contained"
            color="primary"
            onClick={e => handleClick(speech)}
          />
        </div>
        <div item xs={12} >
          { speech && <audio autoPlay src={speech}></audio> }
        </div>
        </div>
 	)
}
export default SpeechApi;
