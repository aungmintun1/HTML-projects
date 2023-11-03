import './App.css';
import './style.css';
import { useState } from 'react';
function App() {

  const [click, setClick] = useState('hidden');

  const handleClick = () => {

    if(click){
      setClick(false);

      setTimeout(() => {
        setClick('hidden');
      }, 1000);
    }

    else{
      setClick(true);
    }

  }

  return (
  <>
     <header class="header">
        <nav>
            <ul>
                <li><a href="#home"> Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <button onClick={handleClick} class='btn'>menu</button>
            </ul>
        </nav>
    </header>


    <div className={`${click ? 'menu' : 'clear menu'} ${click === 'hidden' && 'hidden'}`}>
      
        <nav>
            <ul class="menulist">
                <li><a href="#home"> Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    </div>

    <h1>wahst up</h1>
  </>
  );
}

export default App;
