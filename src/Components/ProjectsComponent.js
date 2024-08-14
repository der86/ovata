import React from 'react';
import asset from './Assets/Innovation.jpg'
// import LogoComponent from './LogoComponent';

const ProjectsComponent = () => {
  return (
    <div id='vision' className='product'>
      <div>
        <h1 className='text1'>
          Our <span>Vision</span>
        </h1>
      </div>

      <div className="home31">

        <div className="logo1">
          {/* <Innovationimage/> */}
          <img src={asset} alt="" />
        </div>
        <div className="home11">
          <div className="home">

            <h2>
              Ovata innovations has the solution you are looking for.
            </h2>
          </div>

        </div>
      </div>

    </div>

  )
}

export default ProjectsComponent;