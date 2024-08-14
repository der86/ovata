import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>      
      <button className="button1" onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default LoginPage;







// import React from "react";
// import { Link } from 'react-router-dom';
// import Login from './LoginForm/LoginForm'


// const ButtonComponent = () => {
//     return ( 
        
      
      
//       <Link to="/LoginForm"><button className="button1" >{Login}get intouch</button></Link>
        
//      );
// }
 
// export default ButtonComponent


// import React from 'react';

// function MyButton() {
//   return (
//     <a href="/LoginForm">
//       <button>get intouch</button>
//     </a>
//   );
// }

// export default MyButton;