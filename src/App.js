import React, {useState, useRef } from 'react';
import { exportComponentAsJPEG } from "react-component-export-image";
import MetaTags from './components/MetaTags';
import Inputs from './components/Inputs';
import OutputText from './components/OutputText';
import TextSize from './components/TextSize';
import  './index.css';


function App() {

  var imageAsUrl
  const [file, setFile] = useState('');
  const onImageChange = event => {
    if(imageAsUrl !== undefined){
      URL.revokeObjectURL(imageAsUrl)
    }
    imageAsUrl = URL.createObjectURL(event.target.files[0])
    setFile(imageAsUrl);
  }

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';

  }
  const onDragStart = (event) => {
    event.preventDefault();
  }

  const onDrop = (event) => {
    event.preventDefault();
    imageAsUrl = URL.createObjectURL(event.dataTransfer.files[0])
    setFile(imageAsUrl)
  }
  
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
    
  const handleTopText = (text) => {
    setTopText(text);
  };
  
  const handleBottomText = (text) => {
    setBottomText(text);
  };
    
//Size change
  const [topTextSize, setTopTextSize] = useState('');
  const [bottomTextSize, setBottomTextSize] = useState('');

  const handleTopTextSize = (text) => {
    setTopTextSize(text);
  };
  const handleBottomTextSize = (text) => {
    setBottomTextSize(text);
  };  
  const downloadImage = useRef();

  return (
    <main>
      <MetaTags/>
      <h1>Meme generator</h1>
      <div className="meme-generator"  onDragOver={onDragOver}  onDragStart={onDragStart} onDrop={onDrop}>
        <div className="meme" ref={downloadImage}>
          <img src={file} alt=""></img>
          <OutputText myCss={"top-text"} size={topTextSize} texts={topText}/>
          <OutputText myCss={"bottom-text"} size={bottomTextSize}  texts={bottomText}/>
        </div>
        <div className="tools">
          <div className="source">
            <h2>Upload or drag image</h2>
            <input type="file" onChange={onImageChange}></input>
          </div>
          <div className="inputs">
            <Inputs titleText={"Top text"} myCss={"top-input"} handleInputChange={handleTopText}/>
            <Inputs titleText={"Bottom text"} myCss={"bottom-input"} handleInputChange={handleBottomText}/>
          </div>
          <div className="sizes">
            <TextSize titleText={"Top text size"} handleRangeChange={handleTopTextSize}/>
            <TextSize titleText={"Bottom text size"} handleRangeChange={handleBottomTextSize}/>
          </div>
          <div className="button">
            <button type="submit" onClick={() => exportComponentAsJPEG(downloadImage)}>Download</button>
          </div>
        </div>
      </div>
    </main>
  );
};


export default App;
