import './App.css';
import { useState } from 'react';
import Modal from './Modal'

function App() {

  const [open, setOpen] = useState(false);

  const toggle = () =>{

    if(open){
      setOpen(false)
    }
    else setOpen(true)
  }

  return (
<>
<h1>modal</h1>

<button onClick={toggle}>open modal</button>


<div className='modalSec'>
{open && (<Modal/>)}
</div>


</>
  );
}



export default App;
