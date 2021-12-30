import React from 'react';
import './app.scss'
import TopBar from './components/TopBar/TopBar'
import ContentPage from './components/ContentPage/ContentPage';
import './fonts/outward-master/fonts/ttf/outward-block.ttf';


function App() {
  return (
    <div className="App">
      <div>
        <div class="font-face-outward-nm">
          <TopBar></TopBar>
        </div> 
        <div>
        <ContentPage></ContentPage>
        </div>  
      </div>
    </div>
  );
}

export default App;
