
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import NgoPage from './Components/Pages/NgoPage';
import ClientPage from './Components/Pages/ClientPage';
// import userProvider from './Context/userProvider';
import UserProvider from './Context/userProvider';
function App() {
  return (
    <Router>

      <div className="App">
        {/* holiday */}
        <UserProvider>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/ngo' element={<NgoPage/>}></Route>
          <Route exact path='/client' element={<ClientPage/>}></Route>
        </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
