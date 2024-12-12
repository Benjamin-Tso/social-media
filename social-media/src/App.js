import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
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
              <Route path='/social-media' element={<HomePage/>}/>
              <Route path='/social-media/post/:id' element = {<PostPage/>}/>
              <Route path='/social-media/profile/:id' element = {<Profile/>}/>
              <Route path='/' element={<Navigate to="/social-media"/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
