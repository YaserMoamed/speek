const Speak = text => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "de";
    speech.text = text;
    speechSynthesis.speak(speech);
  };
  
  export default Speak;
  