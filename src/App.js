
import './App.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [font, setFont] = useState('Arial');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Text:', text);
    console.log('Image:', image);
    console.log('Video:', video);
    console.log('Font:', font);
  };
  

  return (
    <div className="App">
      <h1>Notepad</h1>
      <form onSubmit={handleSubmit}>
        <div className='text'>
          <label htmlFor="text-input">Text:</label>
          <textarea id="text-input" value={text} onChange={handleTextChange} />
        </div>
        <div className='image'>
          <label htmlFor="image-input">Image:</label>
          <input type="file" id="image-input" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Uploaded" />}
        </div>
        <div className='video'>
          <label htmlFor="video-input">Video:</label>
          <input type="file" id="video-input" accept="video/*" onChange={handleVideoChange} />
          {video && (
            <video width="320" height="240" controls>
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
        <div className='font'>
          <label htmlFor="font-select">Font:</label>
          <select id="font-select" value={font} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
