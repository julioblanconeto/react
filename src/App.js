import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { home } from './pages//home/home';
import { sobre } from './pages/sobre';
import { detalhes } from './pages/detalhes';
//import { naoencontrado } from './pages/naoencontrado';
import "./App.css";
import {Link } from 'react-router-dom';
import Sound from 'react-sound';

const Corpo = () =>{
  return <div className = "bordaExterna">
        
    <div className = "bordaEsquerda">
      <div className="bolinhaAzul"></div>
      <div className="bolinhaVerde"></div>
      <div className="bolinhaVermelha"></div>
      <div className = "campoEsquerda">
      </div>

      <Link to="./home"><div className = "BtnHome"/></Link>   
      <Link to="./detalhes"><div className = "BtnDetalhes"/></Link>
      <Link to="./sobre"><div className = "BtnSobre" /></Link>

      <div className = "campoBaixo" >

      </div>
    </div>
    <div className = "meio">

      <img src="/images/pokebola.png"  alt="pokebola" className = "pokebolaCima" />
      <img src="/images/pokebola.png"  alt="pokebola" className = "pokebolaBaixo"/>
      
    </div>
    <div className = "bordaDireita">
      <div className= "campoDireita">

      </div>

    </div>
  </div>
}
const Audio =() =>{
  return (
    <Sound
      url="/audio/pokemon.mp3"
      playStatus={Sound.status.PLAYING}
      //playStatus={Sound.status.STOP}
    />
  );
};

 function App() {
  return (
    <div>
      <Audio/>
      <BrowserRouter>
      <Corpo/>
        <Switch>
          <Route component = { home } path = "/home"></Route>
          <Route component = { detalhes } path = "/detalhes"></Route>
          <Route component = { sobre } path = "/sobre"></Route>
          <Route component = { home } path = "/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
