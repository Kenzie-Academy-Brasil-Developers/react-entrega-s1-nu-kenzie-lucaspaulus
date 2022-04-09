import { useState } from 'react';
import './App.css';
import HomePage from "./pages/HomePage"
import DashBoard from './pages/DashBoard';
function App() {
  const [isHomePage, setIsHomePage] = useState(true)

  
  return (
    <div className="App">
        {isHomePage
            ?
            <HomePage setIsHomePage={setIsHomePage}/>
            :
            <DashBoard  setIsHomePage={setIsHomePage}/>


        }
        
    </div>
  );
}

export default App;
