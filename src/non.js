export default () => {
    return (
        <div className="result-image">
        <img src="/images/placeholder-image.png" />
        <img src="/images/placeholder-image.png" />
        <img src="/images/placeholder-image.png" />
        <img src="" />
        <div className="container">
        <div className="results-page">
   
      <div className="results">
      {RelatedTopics.map((result , index) => (
          <div className="result" key={index}>
          <span className="result-url text"> {result.url} </span>
          <h1 className="result-title text" onClick={e => Speak(result.Text)}>{result.Text}</h1>
          <p className="result-description text" onClick={e => Speak(result.Text)}>
          {result.Text}
          </p>
          </div>    
          ))}
          </div>
          </div>
          </div>
          </div>
    )
}