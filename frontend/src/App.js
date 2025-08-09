
import './App.css';
import LandingPage from './pages/landing';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import Homecomponent from './pages/home';
import History from './pages/history';


function App() {
  return (
  <>
  <Router>
    <AuthProvider>
    <Routes>
      <Route path='/' element={< LandingPage /> }   />
      <Route path='/auth' element={<Authentication />} />
      <Route path='/:url' element={<VideoMeetComponent/>} />
      <Route path='/home' element={<Homecomponent/>} />
      <Route path='/history' element={<History/>} />
      
    </Routes>
    </AuthProvider>
  </Router>
  
  </>





  )}
    
    
         
    


export default App;
