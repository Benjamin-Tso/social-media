import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage'
import Profile from './pages/Profile';
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <>
      <Router>
        <div id='app'>
          <NavigationBar/>
          <div id='page'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/post/:id' element = {<PostPage/>}/>
              <Route path='/profile/:id' element = {<Profile/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
