import React from 'react';
import ReactDOM from 'react-dom';
import head,{Head} from './Head';
import Title from './Title';
import {add,sub,multi,div} from './Cals';
import Counter from './Counter';


ReactDOM.render(
  <>
    <h1>{head}</h1>
    <Head/>
    <Title/>
    <Counter/>
    <ul>
    <li>Addition:{add(12,4)}</li>
      <li>substraction:{sub(12,4)}</li>
      <li>multiplication:{multi(12,4)}</li>
      <li>division:{div(12,4)}</li>
    </ul>
  
  </>,
  document.getElementById("root")
);

