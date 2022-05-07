
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import NgoPage from './Components/Pages/NgoPage';
import ClientPage from './Components/Pages/ClientPage';
function App() {
  return (
    <Router>

      <div className="App">
        {/* holiday */}
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/ngo' element={<NgoPage/>}></Route>
          <Route exact path='/client' element={<ClientPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
