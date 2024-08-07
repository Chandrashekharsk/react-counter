import './App.css'
import Heading from './components/Heading.jsx';
import Button from './components/Button.jsx';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  return (
    <container>
      <h1 className='main'>Counter</h1>
      <div>
        <Heading count={count} />
        <Button setCount={setCount} display={+1} />
        <Button setCount={setCount} display={-1} />
        <Button setCount={setCount} display={+5} />
        <Button setCount={setCount} display={-5} />
      </div>
    </container>
  )
}

export default App
