import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import MyFirstComp from './components/learning-egs/MyFirstComponent';
import MySecondComp from './components/learning-egs/MySecondComponent';
import MyThirdComponent from './components/learning-egs/MyThirdComponent';
import Counter from './components/counter/Counter';
import MyCrudWelcomePage from './components/MyCRUDView/MyCrudLandPg';

function App() {
  return (
    <div className="App">
      @@## my first reach js app :) !!!!
      {/* <Counter/> */}
      <MyCrudWelcomePage/>
    </div>
  );
}


class LearningComponents extends Component{
render(){
  return (
    <div className="LearningComponents">
      <h4>Please find the learning comps below: <br/></h4>
      <MyFirstComp /> 
      <MySecondComp /> 
      <MyThirdComponent />
    </div>
  );
};
}

export default App;
