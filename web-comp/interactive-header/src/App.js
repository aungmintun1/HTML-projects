import './App.css';
import './style.css';
import { useState } from 'react';
function App() {

  const [click, setClick] = useState('default');

  const handleClick = () => {

    if(click==='visible'){
      setClick('fadeOut')

      setTimeout(() => {
            setClick('hidden');
          }, 1000);
        }

    

   else{
    setClick('visible')
   }

    
    // if(click){
    //   setClick('fade');

    //   setTimeout(() => {
    //     setClick('hidden');
    //   }, 1000);
    // }

    // else{
    //   setClick('visible');
    // }

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


    <div className={` ${click === 'default' && 'hidden'} ${click ==='visible' && 'menu'} ${click === 'fadeOut' && 'menu clear'} ${click === 'hidden' && 'hidden'}` }>
      
        <nav>
            <ul class="menulist">
                <li><a href="#home"> Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    </div>

    <h1>{click}</h1>
  </>
  );
}

export default App;
