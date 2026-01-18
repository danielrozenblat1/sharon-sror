import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageWrapper from './homePage/MainPageWrapper';
import TrainingPageWrapper from './trainingPage/TrainingPageWrapper';
import BridesPageWrapper from './bridesPage/BridesPageWrapper';

function App() {
  return <>
   <Router>
    <Routes>
   
    <Route path="/" index element={<MainPageWrapper/>}/>
    <Route path="/מאפרת" index element={<TrainingPageWrapper/>}/>
    <Route path="/כלה" index element={<BridesPageWrapper/>}/>
 </Routes>
 </Router>
  </>
}

export default App;