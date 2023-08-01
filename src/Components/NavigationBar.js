
  import React from 'react';
   import { Link } from 'react-router-dom'; 

const NavigationBar = () => {
   return (
      <nav>
             <ul>
        <li>
          <Link to="/dasboard"> Dashboard</Link>
         </li>
         <li>
           <Link to="/about">About the company</Link>
         </li>
       
       
       </ul>
     </nav>
   );
 };

 export default NavigationBar;
