const Speak = text => {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.text = text;
  speechSynthesis.speak(speech);
};

export default Speak;
