const Speak = text => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "it";
    speech.text = text;
    speechSynthesis.speak(speech);
  };
  
  export default Speak;
  