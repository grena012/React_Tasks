import React from "react";
import { useState } from 'react';
import Cards from "./Cards";
import "./App.css";
 
const App = () => {
   const [name, setName] = useState('user');
   return (
      <div><br/><br/>
      {name} has email id of {name}@gmail.com
      <div><br/><br/>
         <Cards name={name} change={setName} />
      </div>
      </div>
   );
};
export default App;