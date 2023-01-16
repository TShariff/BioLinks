import logo from './logo.png';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <body className="body">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <img src={logo} className = "profile-pic" width="200px" alt="logo" style={{width: 150, height: 150, borderRadius: 200/ 2}}/>
        <h1> @tamjeed.s</h1>
        <form action="https://tamjeedshariff.tech/">
        <button class="button3">Personal Website</button>
        </form>
        <form action="https://www.instagram.com/tamjeed.s/?hl=en">
        <button class="button">Instagram</button>
        </form>
        <form action="https://github.com/TShariff">
        <button class="button2">Github</button>
        </form>
        <form action="mailto:t.tamjeed.shariff@gmail.com">
        <button class="button2">Email</button>
        </form>



        <q>
          Why use linktree when I can just make it
        </q>
      </body>
      
    
    </div>
  );
}

export default App;
