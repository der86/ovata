import React from "react";



function ServicecardComponent({ title, Image, description }) {
  return (
    <div className='card1'>

      <div className="card">
        <button>
          <img className='card-image' src={Image} alt="profile pic"></img>
          <h2 className='card-title'>{title}</h2>
          <p className='card-text'>{description}</p>
        </button>
      </div>




    </div>
  );

}
export default ServicecardComponent;