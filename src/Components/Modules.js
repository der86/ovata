import React, { useState } from 'react';
import vid1 from "./Assets/video1.mp4"
// import 'App.css';

const videos = {
  module1: [
    { id: 'video1', title: 'introduction to UX/UI', src: vid1 },
    { id: 'video2', title: 'Design Psychology', src: 'path_to_video2.mp4' },
    { id: 'video3', title: 'Research Methods', src: 'path_to_video3.mp4' }
  ],
  module2: [
    { id: 'video4', title: 'Wireframing/Prototyping', src: 'path_to_video4.mp4' }
  ]
};

const Dropdown = ({ module, onSelectVideo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{module}</button>
      {isOpen && (
        <ul>
          {videos[module.toLowerCase()].map(video => (
            <li key={video.id} onClick={() => onSelectVideo(video.src)}>
              {video.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Modules() {
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleSelectVideo = (src) => {
    setSelectedVideo(src);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Dropdown module="Module1" onSelectVideo={handleSelectVideo} />
        <Dropdown module="Module2" onSelectVideo={handleSelectVideo} />
      </div>
      <div className="video-container">
        {selectedVideo && (
          <video width="600" controls>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        )}
         
      </div>
      <div>
        <h1>introduction to UX/UI Design</h1>
        <p>UX/UI Design is a process of designing and developing a user interface for a website</p>
      </div>
    </div>
  );
}

export default Modules;
